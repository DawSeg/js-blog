'use strict';

/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

/* [DONE] remove class "active from all article links */
const activeLinks = document.querySelectorAll('.titles a');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

/* [DONE] add class 'active' to the clicked link */
clickedElement.classList.add('active');
console.log("clickedElement:", clickedElement);

/* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

/*[DONE] get 'href' attribute from the clicked link */
const linkSelector = clickedElement.getAttribute('href');
console.log(linkSelector);

/*[DONE] find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(linkSelector);
console.log(targetArticle);

/* [DONE] add class 'active' to the correct article */
targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
  /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    function clearTitleList() {
      titleList.innerHTML = '';
    }
    clearTitleList();

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
    for( let article of articles) {

    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleListSelector).innerHTML;

    /* get the title from the title element */
      
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log (linkHTML);

    /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;


    }      
  }
  generateTitleLinks();