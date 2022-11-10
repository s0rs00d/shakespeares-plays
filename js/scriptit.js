let genres = document.querySelectorAll(".ul-genre");
let links = document.querySelectorAll("a");
let tablePlays = document.getElementById("table-plays");
let tableSonnets = document.getElementById("table-sonnets");

genres.forEach((element) => {
  element.classList.add("ul-style");
});

links.forEach((element) => {
  element.classList.add("a-style");
  let str1 = element.href.substring(element.href.length - 3);
  console.log(str1);
  let str2 = element.href.slice(0, 6);
  if (str1 == "pdf") {
    let pdf = document.createElement("i");
    pdf.classList.add("fa-solid", "fa-file-pdf", "pdf-style");
    element.appendChild(pdf);
  }
  if (str2 == "mailto") {
    let mail = document.createElement("i");
    mail.classList.add("fa-solid", "fa-envelope", "env-style");
    element.appendChild(mail);
    element.insertBefore(mail, element.firstChild);
  }
  const isExternalLink = (url) => {
    element.href = url;
    return element.host !== window.location.host;
  };
  console.log(isExternalLink(element));
  if (isExternalLink(element)) {
    let extLink = document.createElement("i");
    extLink.classList.add(
      "fa-solid",
      "fa-arrow-up-right-from-square",
      "ext-style"
    );
    element.appendChild(extLink);
    element.insertBefore(extLink, element.firstChild);
  }
});

tablePlays.classList.add("table-first");

tableSonnets.classList.add("table-second");