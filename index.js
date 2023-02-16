function switchRectangle(rectId, btnId, borderId, textId, priceId, buttonId) 
{
    const ActivePriceBtn = document.getElementById(`${btnId}`);
    
    const ActiveRectangle = document.getElementById(`${rectId}`);

    const Border = document.getElementById(`${borderId}`);

    const Text = document.getElementById(`${textId}`);

    const Price = document.getElementById(`${priceId}`);

    const Button = document.getElementById(`${buttonId}`);

    ActivePriceBtn.classList.toggle('active');
    
    ActiveRectangle.classList.toggle('active');
    
    Border.classList.toggle('active');
    
    Text.classList.toggle('active');
    
    Price.classList.toggle('active');
    
    Button.classList.toggle('active');

    // window.onclick = function (event)
    // {
    //   if (!event.target.matches('#' + btnId))
    // {
    //   ActivePriceBtn.classList.remove('active');
    //   ActiveRectangle.classList.remove('active');
    //   Border.classList.remove('active');
    //   Text.classList.remove('active');
    //   Price.classList.remove('active');
    //   Button.classList.remove('active');
    // }
    // else if (event.target.matches('#' + btnId))
    // {
    //   var items = document.getElementsByClassName("prices-cascade-rect");

    //   let count = 0;
      
    //   for (let i = 0; i < items.length; i++) 
    //   {
    //     var activeitem = items[i];

    //     if (activeitem.classList.contains('active')) 
    //     {
    //       count++;
          
    //       if (count > 1)
    //       {
    //         // activeitem.classList.remove('active');
    //         ActivePriceBtn.classList.remove('active');
    //         ActiveRectangle.classList.remove('active');
    //         Border.classList.remove('active');
    //         Text.classList.remove('active');
    //         Price.classList.remove('active');
    //         Button.classList.remove('active');
    //       }
          
    //       // document.getElementById('contacts-btn').classList.remove('active');
    //     }
    // }
    // }
}
    
function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('contacts-btn').classList.toggle('active');
    document.getElementById('contacts-rectangle').style.background = "#C1E698";
}

window.onclick = function(event) {
    if (!event.target.matches('.contacts-btn')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) 
        {
          openDropdown.classList.remove('show');
          document.getElementById('contacts-btn').classList.remove('active');
        }
      }
    }
}

function HighlightBorder(BorderId)
{
  document.getElementById(`${BorderId}`).style.border = '1px solid #717171'; 
}

function Ret(BorderId)
{
  document.getElementById(`${BorderId}`).style.border = '1px solid #D9D9D9';
}

function ChoiceOfDropdown(p)
{ 
  document.querySelector('.city-card').classList.remove('active');

  document.querySelector('.city-card').classList.toggle('active');
  
  var textToChange = document.getElementById('contacts-rect-text');
  var City = document.getElementById('City');
  var Phone = document.getElementById('Phone');
  var Address = document.getElementById('Address');

  textToChange.innerText = p.innerText;
  City.innerText = p.innerText;

  textToChange.style.fontSize = '16px';

  document.getElementById('contacts-btn').style.backgroundImage = 'url(assets/accordion_btn3.svg)';

  var mapOfContacts = new Map();
  mapOfContacts.set('Canandaigua, NY', {phone: "+1 585 393 0001", address: "151 Charlotte Street"});
  mapOfContacts.set('New York City', {phone: "+1 212 456 0002", address: "9 East 91st Street"});
  mapOfContacts.set('Sherrill, NY', {phone: "+1	315	908 0004", address: "14 WEST Noyes BLVD"});
  mapOfContacts.set('Yonkers, NY', {phone: "+1 914 678 0003", address: "511 Warburton Ave"});

  mapOfContacts.forEach((value, key, map) =>
  {
    if (p.innerText == `${key}`)
    {
      Phone.innerText = `${value.phone}`;
      Address.innerHTML = `${value.address}`;
    }
  }
    )

    var ContactsSectionImage = document.querySelectorAll(".contact-woman");
    ContactsSectionImage.forEach(el => el.style.marginTop = "10px");
}

function GetScreenWidth()
{
  return screen.width;
}

const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav-bar');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.onclick = function () { switchMenu(); }

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));