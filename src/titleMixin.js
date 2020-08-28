function getTitle (vm) {
  //définit 'title' parmi les autres options du component
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function'
      ? title.call(vm) //si 'title' c'est une fonction, on l'appelle
      : title         //ou met la valeur déjà définit
  }
}
function getDescription (vm) {
  //définit 'desciption' parmi les autres options du component
  const { description } = vm.$options;
  if (description) {
    return typeof description === 'function'
      ? description.call(vm) //si 'description' c'est une fonction, on l'appelle
      : description         //ou met la valeur déjà définit
  }
}
export default {
  //quand la page est créée la fonction se lance et définit le title de la page
  created () {
    const title = getTitle(this);
    const description = getDescription(this);
    if (title) {
      document.title = title
    }
    if (description) {
      document.head.querySelector('meta[name=description]').content = getDescription(this)
    }
  }
}