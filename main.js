document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kgsInput').addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    let kgs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = kgs * 1000;
    document.getElementById('lbsOutput').innerHTML = kgs * 2.2046;
    document.getElementById('ozOutput').innerHTML = kgs * 35.274;
});