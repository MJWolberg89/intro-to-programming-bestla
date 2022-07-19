let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `Michael Wolberg  &copy;${thisYear}`;
document.querySelector('footer').appendChild(copyright);
let skills = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Regular Expersions'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};