<?php
/*
 * Collect all Details from Angular HTTP Request.
 */
$postdata = file_get_contents ( "php://input" );
$request = json_decode ( $postdata );
@$email = $request->email;
@$pass = $request->pass;

/*
 * You can use $email and $pass for further work. Such as Database calls.
 */
#echo mail ( 'shushotora@gmail.com', 'the subject', 'the message', null, '-fwebmaster@example.com' );

echo mail ( 'shushotora@gmail.com' , 'the subject' , 'the message');

?>
