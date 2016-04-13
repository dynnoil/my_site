<?php
  require_once "db.php";
  if (isset($_GET["page_id"])) {
    $page_id = htmlspecialchars($_GET["page_id"]);
    $query = sprintf("SELECT c.header, c.text FROM  content c JOIN page p 
              ON p.page_id = c.page_id WHERE p.page_id ='%s'", $page_id);
    $result = mysql_query($query, $db);
    if (!$result) {
      die(mysql_error());
    }
    $data = array();
    while ($array = mysql_fetch_row($result)) {
      $data[] = $array;
    }
    echo json_encode($data);          
  } else {
    die("Error! Wrong page id!");
  }