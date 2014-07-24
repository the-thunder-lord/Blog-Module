<?php
require_once('../../libraries/awssdk/sdk.class.php');
// S3 Code

$query = $_GET["query"];
$client = substr($query, strpos($query, "client")+6, strpos($query, "|conference")-6);
$conference = substr($query, strpos($query, "conference")+10, strpos($query, "|session")-18);
$session = substr($query, strpos($query, "session")+7);
switch($client) {
  case "1": $file .= "esri/"; break;
}

switch($conference) {
  case "1" : $file .= "uc14-tw-";
}

$file .= $session . ".mp4";

$sts = new AmazonSTS();
$response = $sts->get_session_token();


if($response->isOK()) {
  $credentials = array(
  'key' => (string) $response->body->GetSessionTokenResult->Credentials->AccessKeyId,
  'secret' => (string) $response->body->GetSessionTokenResult->Credentials->SecretAccessKey,
  'token' => (string) $response->body->GetSessionTokenResult->Credentials->SessionToken,
  );  
} else
die('Temporary credentials could not be retrieved.');


$s3 = new AmazonS3($credentials);
 $source = 'steve-video';
 $dest = $source;
 /*$copy = $s3->copy_object(
    array(
      'bucket' => $source,
      'filename' => '2014WSA_S3-3.mp4'
    ),
    array(
      'bucket' => $dest,
      'filename' =>'other_name.mp4' 
    ),
    array(
      'acl' => AmazonS3::ACL_PRIVATE
    )
  );*/

$url = $s3->get_object_url($dest, $file, '10 minutes');
?>

  <source src="<?php echo $url;?>" type="video/mp4"></source>

