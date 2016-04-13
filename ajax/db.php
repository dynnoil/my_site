<?php
  $db = mysql_connect("localhost","root");
  if (!$db) {
      die("Can't connent to databse: " . mysql_error());
  }
  mysql_select_db("my_site");
  mysql_query("set character_set_client='utf8'");
  mysql_query("set character_set_results='utf8'");
  mysql_query("set collation_connection='utf8_general_ci'");  