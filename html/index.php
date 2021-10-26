<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Верстка</title>
</head>
<body>
    <ul>
        <?php 
        $dirs = scandir(__DIR__)
        ?>

        <?php for ($i = 3; $i < count($dirs); $i++) :?>
        <li>
            <a href="http://shubizle11.beget.tech/dev/html/<?php echo rawurlencode($dirs[$i]); ?>"><?php echo $dirs[$i]; ?></a>
        </li>
        <?php endfor;?>
    </ul>
</body>
</html>