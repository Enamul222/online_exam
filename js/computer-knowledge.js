var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'ওয়াইফাই(Wi-Fi) নেটওয়ার্কে সংযোগ এর জন্য সংশ্লিষ্ট ডিভাইসটির সংযোগ মাধ্যম কোনটি? ',
                options: ['তামার তার', 'অপটিক্যাল ফাইবার', 'তারহীন সংযোগ', 'উপরের সবকয়টি'],
                answer:3
            },
            {
                q:'Push এবং Pop নিচের কার সাথে সম্পর্কিত?',
                options: ['Queue ', ' Stack ', 'Union ', 'Array'],
                answer:2
            },
            {
                q:'TCP দিয়ে কোনটি বোঝানো হয়?',
                options: ['প্রোগ্রাম', 'প্রোটোকল', 'প্রোগ্রামিং', 'ফ্লোচার্ট'],
                answer:2
            },
            {
                q:'ই-মেইল আদান-প্রদানে ব্যবহৃত SMTP- এর পূর্ণরূপ কি?',
                options: ['Simple Message Transmission Protocol', 'Strategic Mail Transfer Protocol', 'Strategic Mail Transmission Protocol', 
                'Simple Mail Transfer Protocol'],
                answer:4

            },
            {
                q:'ই-কমার্স সাইট amazon.com কত সালে প্রতিষ্ঠিত হয়?',
                options: ['১৯৯০ সালে', '১৯৮৮ সালে', '১৯৯৪ সালে ', '১৯৯৮ সালে'],
                answer:3
            },
            {
                q:'EDSAC কম্পিউটারে ডাটা সংরক্ষণের জন্য কি ধরনের মেমোরি ব্যবহার হতো?',
                options: ['RAM', 'ROM', 'Mercury Delay Lines', 'Registors'],
                answer:3
            },
            {
                q:'আইওএস (IOS) মোবাইল অপারেটিং সিস্টেমটি কোন প্রতিষ্ঠান বাজারজাত করে?',
                options: ['অ্যাপেল', 'গুগল', 'মাইক্রোসফট', 'আইডিএম'],
                answer:1
            },
            {
                q:'এন্ড্রয়েড অপারেটিং সিস্টেমের ক্ষেত্রে নিচের কোনটি সঠিক?',
                options: ['এটির নির্মাতা গুগোল', 'এটি লিনাক্স কার্নেল নির্ভর', 'এটি প্রধানত টাচস্ক্রিন মোবাইল ডিভাইসের জন্য তৈরি', 'উপরের সবগুলো সঠিক'],
                answer:4
            },
            {
                q:'ইউনিকোডের মাধ্যমে সম্ভাব্য কতগুলো চিহ্নকে নির্দিষ্ট করা যায়?',
                options: ['২৫৬ টি', '৪০৯৬ টি', '৬৫৫৩ টি', '৪২৯৪৯৬৭২৯৬ টি'],
                answer:3
            },
            {
                q:'নিচের কোনটি ইনপুট ডিভাইস ?',
                options: ['OMR', 'COM', 'Plotter', 'Monitor'],
                answer:1
            },
            {
                q:'IP-V6 এড্রেস কত বিটের?',
                options: ['১২৮', '৩২', '১২', '৬'],
                answer:1
            },
            {
                q:'ক্লাউড সার্ভার নিচের কোনটিকে সবচেয়ে ভালো বর্ণনা করা সম্ভব?',
                options: ['নেটওয়ার্কের মাধ্যমে যুক্ত একাধিক কম্পিউটার সার্ভার', 'একটি বিশাল ক্ষমতা সম্পন্ন কম্পিউটার সার্ভার', 'ব্যবহারকারীর চাহিদা অনুযায়ী কম্পিউটার সেবা দেওয়া', 'ওপরের কোনোটিই নয়'],
                answer:3
            },            
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}