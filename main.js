

// 1. 
// let userName = prompt ("Введите Ваше имя");
// alert(`Привет, дорогой ${userName}`);

// 2. 
// let someText = prompt ("Введите какой-то текст с запятыми");
// alert(someText.split(',').join(', блин,'));

// 3. 
// let someWord = prompt ("Введите слово");
// let transformWord = someWord.toLowerCase();
// alert(transformWord[0].toUpperCase() + transformWord.slice(1));

// 4. 

// let userSurName = prompt ("Введите Вашу фамилию").toLowerCase().trim();
// let newUserSurName = userSurName[0].toUpperCase() + userSurName.slice(1);

// let userName = prompt ("Введите Ваше имя").toLowerCase().trim();
// let newUserName = userName[0].toUpperCase() + userName.slice(1);

// let userFatherName = prompt ("Введите Ваше отчество").toLowerCase().trim();
// let newUserFatherName = userFatherName[0].toUpperCase() + userFatherName.slice(1);


// alert(newUserSurName + " " +  newUserName + " "+ newUserFatherName );

// 5. 
// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let result = str.split('пиво').join('чай');
// alert(result);

// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let result = str.slice(0,str.indexOf('<')) + str.slice(str.indexOf('>')+2)
// alert(result) 

// 6.  

// let str = "якийсь текст у якому є один тег <br /> і всяке інше"
// let result = str.slice(0,str.indexOf('<'))
//  +
//  str.slice(str.indexOf('<'),str.indexOf('>')+1).toUpperCase()
//  +
//  str.slice(str.indexOf('>')+1);
//  alert(result);

//  7.

  // let a = prompt ("Введите текст. В местах предполагаемых переносов введите \\n ");
  // alert(a.split('\\n').join('\n'));

  // 8. 

// const myregexp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;

// const videoLink = prompt("Введите ссылку на видео");

// const videoId = videoLink.match(myregexp)[1];
// const iframeHtmlString = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
// document.write(iframeHtmlString);