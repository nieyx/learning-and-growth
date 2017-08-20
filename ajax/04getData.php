<?php 
$t = isset($_GET['t']) ? $_GET['t'] : 'num';
$callback = isset($_GET['callback']) ? $_GET['callback'] : 'foo1';

$arr1 = array('111','222','333','444');
$arr2 = array('aa','bb','cc','dd');

if ($t == 'num') {
	$data = json_encode($arr1);
} else {
	$data = json_encode($arr2);
}

echo $callback.'('.$data.');';
?>

