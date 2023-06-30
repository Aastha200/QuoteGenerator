const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown, Jr.",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The biggest risk is not taking any risk. - Mark Zuckerberg",
    "Dream big and dare to fail. - Norman Vaughan"
  ];
  
  const colors = ["#FF5F40", "#00A8CC", "#ECDB54", "#C4E0E5", "#F6D365", "#C1C8E4", "#F0C38E", "#E58F65", "#9FD8CB", "#A07855"];
  
  // Function to get the time of day
  function getTimeOfDay() {
    const hours = new Date().getHours();
    
    if (hours >= 5 && hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 17) {
      return "afternoon";
    } else {
      return "evening/night";
    }
  }
  
  // Function to update the title greeting
  function updateGreeting() {
    const timeOfDay = getTimeOfDay();
    const titleElement = document.getElementById("title");
    titleElement.textContent = `Let's start our ${timeOfDay} with a new quote`;
    
  }
  
  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Function to get a random color
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  // Function to update the quote and background color
  function updateQuote() {
    const quoteElement = document.getElementById("quote");
    const newQuoteBtn = document.getElementById("newQuoteBtn");
    const quoteBox = document.getElementById("quote-box");
    const body = document.body;
    const titleElement = document.getElementById("title");
    const randomQuote = getRandomQuote();
    const randomColor = getRandomColor();
    const lightColor = lightenColor(randomColor, 0.2);
  
    quoteElement.textContent = randomQuote;
    quoteElement.style.fontSize = "20px";

    quoteElement.style.color = randomColor;
    newQuoteBtn.style.backgroundColor = randomColor;
    quoteBox.style.backgroundColor = lightColor;
    body.style.backgroundColor = randomColor;
    quoteBox.style.position = "absolute";
    quoteBox.style.top = "50%";
    quoteBox.style.left = "50%";
    quoteBox.style.transform = "translate(-50%, -50%)";
    quoteBox.style.width = '500px';
    quoteBox.style.height = '300px';
    newQuoteBtn.style.position = "absolute";
    newQuoteBtn.style.bottom = "20px";
    newQuoteBtn.style.left = "50%";
    newQuoteBtn.style.transform = "translateX(-50%)";
    newQuoteBtn.style.height = "40px";
    newQuoteBtn.style.width = "120px";
    newQuoteBtn.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.5)";

    quoteElement.style.display = "flex";
    quoteElement.style.justifyContent = "center";
    quoteElement.style.alignItems = "center";
    quoteElement.style.padding = "20px";
    quoteElement.style.fontSize='35px';
    titleElement.style.display = "flex";
    titleElement.style.justifyContent="center";
    titleElement.style.alignItems="center";
    titleElement.style.padding="50px";
    
    
  }
  
  // Event listener for the "New Quote" button
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  newQuoteBtn.addEventListener("click", updateQuote);
  
  // Initial setup
  updateGreeting();
  updateQuote();
  
  // Function to lighten a color
  function lightenColor(color, amount) {
    color = color.replace("#", "");
    const num = parseInt(color, 16);
    const r = Math.min(255, (num >> 16) + amount * 255);
    const b = Math.min(255, ((num >> 8) & 0x00ff) + amount * 255);
    const g = Math.min(255, (num & 0x0000ff) + amount * 255);
    const newColor = (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0");
    return "#" + newColor;
  }
  