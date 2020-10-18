<?php
if(isset($_GET['status']) && $_GET['status']=='input')
{
   $name =$_GET['name'];
   $age =$_GET['age'];
   $email= $_GET['email'];
   $csv="$name,$age,$email\n";
   $fp=fopen("profile.csv","a");
   fwrite($fp,$csv);
   fclose($fp);
// echo $_GET['status'];
}
if(isset($_GET['status']) && $_GET['status']=='load')
{
    if(file_exists("profile.csv")){
        $fp=fopen("profile.csv","r");
        $filesize=filesize("profile.csv");
        // $seprator=",";
        while($row=fgetcsv($fp,$filesize,",")){
            $tb="<tr>";
            $tb.="<td>{$row[0]}</td>";
            $tb.="<td>{$row[1]}</td>";
            $tb.="<td>{$row[2]}</td>";
            $tb.="</tr>";
        echo $tb;
        }
    }else{echo "<tr> No File Or Data</tr>";}
// echo $_GET['status'];
}
if(isset($_GET['status']) && $_GET['status']=='remove')
{
   unlink("profile.csv");
// echo $_GET['status'];
}
if(isset($_POST['down']))
{
    if(file_exists("profile.csv")){
    $file=$_POST['down'];
    header('Content-Type:  text/csv');
    header('Content-Disposition: attachment; filename="' . ($file).'"');
    header('Pragma: no-cache');
    // readfile('/var/www/admin/backend/public/' . $file);
    readfile($file);
    }else{echo "No File to download";}
}




?>