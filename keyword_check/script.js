console.log('Project 5');
const insert=document.getElementById('insert')
console.log(insert)
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${ e.key===" "? "Space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  
</table>
  `
})