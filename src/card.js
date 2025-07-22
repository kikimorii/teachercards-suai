import './scss/card.scss';
import { Breadcrumb } from "./js/components/breadcrumb";
import { Person } from "./js/components/person/person";
import { ErrorAlert } from "./js/components/errorAlert";

const pageContainer = document.querySelector("#person");
const breadcrumbWrapper = pageContainer.querySelector(".breadcrumb-wrapper");

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const value = params.get('id');

fetch(`https://kikimorii.github.io/testJson/${value}.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка загрузки JSON');
    }
    return response.json();
  })
  .then(data => {
    const breadcrumb = new Breadcrumb(data.name);
    breadcrumb.render(breadcrumbWrapper);
    const person = new Person(data);
    person.render(pageContainer);
  })
  .catch(error => {
    const errorAlert = new ErrorAlert();
    errorAlert.render(pageContainer);
    console.error('Ошибка:', error);
  });