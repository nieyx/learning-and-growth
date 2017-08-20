<?php 
$t = isset($_GET['t']) ? $_GET('t') : 'num';
$arr1 = array('111','222','333','444');
$arr2 = array('aa','bb','cc','dd');

if ($t == 'num') {
	$data = json_encode($arr1);
	echo 'foo1('.$data.')';
} else {
	$data = json_encode($arr2);
	echo 'foo2('.$data.')';
}

?>