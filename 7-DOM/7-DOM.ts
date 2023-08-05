let title = document.querySelector('#title') as Element;
// if (title !== null) {
//   title.innerHTML = 'hello';
// }

if (title instanceof Element) {
  title.innerHTML = 'hello';
}
