## 1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
#answer:-
**getElementById(id)** -->নিদিষ্ট একটা 'id'দিয়ে একটামাত্র element ফেরত দেয় ।
**getElementsByClassName("class")** -->একটি নিদিষ্ট class diye একাধিক element এর *HTMLCollection* access করা যায় (live collection) থেকে।
**querySelector("selector")** -->ডকুমেন্টে যে প্রথম element ওই selector এর সাথে মেলে যায়, শুধু সেটিকেই ফেরত দেয়। আর যদি একাধিক element মিলে যায় তখন শুধু প্রথমটি return করবে।
                      এটি CSS selector এর মতো কাজ করে।
**querySelectorAll("selector")** -->এটি একটি static list। selector এর সাথে মিলে যাওয়া সব element কে *NodeList* আকারে ফেরত দেয় ।


## 2️⃣ How do you create and insert a new element into the DOM?
#answer:-
**Create:** -->const section = document.createElement("section");
**Add Content:** -->section.textContent = "Hello World";
**Insert:** -->document.body.appendChild(section);


## 3️⃣ What is Event Bubbling and how does it work?
#answer:-
**Event Bubbling** -->Event Bubbling হলো যখন inner element এ event ঘটে, সেটা parent → grandparent পর্যন্ত উপরের দিকে propagate হয়। যেমন :- button-> div -> body.
                      child থেকে parent দিকে ইভেন্ট ছড়িয়ে যাওয়া মানেই *bubbling*।


## 4️⃣ What is Event Delegation in JavaScript? Why is it useful? 
#answer:-
**Event Delegation**--> হলো parent element এ event listener বসানো, তারপর event.target দিয়ে child element ধরে কাজ করা।  
**useful**---
1.কম event listener লাগে ফলে performance ভালো হয়।  
2.Dynamic (নতুন element যোগ হলেও কাজ করবে)।  

## 5️⃣ What is the difference between preventDefault() and stopPropagation() methods?
#answer:-
**preventDefault()**-->preventDefault() এর কাজ হলো Browser এর Default কাজ বন্ধ করা। 
                      মানে event তো হবে, কিন্তু Browser যে extra কাজটা করতো সেটা আর হবে না। (default কাজ থামায় (form submit, link navigate, ইত্যাদি)।)
                      
**stopPropagation()**--> stopPropagation() এর কাজ হলো Event Bubbling / Capturing থামানো। 
                       মানে যে element এ event ঘটে event ওই element এ হবে, কিন্তু parent এ ছড়াবে না। (ইভেন্ট parent/child এ ছড়ানো থামায়।)            
