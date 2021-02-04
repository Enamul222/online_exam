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
                q:'It is impossible to cook without ———— ',
                options: ['water', 'pot', 'heat', 'spice'],
                answer:3
            },
            {
                q:'কোনটি আলাদা?',
                options: ['জাভা ', ' সেন্ট হেলেনা ', 'সুমাত্রা ', 'মাদাগাস্কার'],
                answer:2
            },
            {
                q:'———– ছাড়া ভালো ছাত্র হওয়া যায় না।',
                options: ['মেধা', 'শ্রম', 'অধ্যাবসায়', 'সময়নিষ্ঠা'],
                answer:3
            },
            {
                q:'আমার কক্ষে এক বৃদ্ধ দম্পতি ও তাদের সাথে দুই দম্পতি প্রত্যেকে দুইজন করে সন্তানসহ আমার কক্ষে প্রবেশ করলেন। আমার কক্ষে মোট কতজন লোক হল?',
                options: ['9', '10', '11', '12'],
                answer:3

            },
            {
                q:'——— ছাড়া সেলাই করা অসম্ভব',
                options: ['সূচ', 'মেশিন', 'সুতা', 'দর্জি'],
                answer:1
            },
            {
                q:'কোনটি আলাদা?',
                options: ['ঢাকা', 'দিল্লী', 'ইসলামাবাদ', 'হাওয়াই'],
                answer:4
            },
            {
                q:'কোনটি ভূল??',
                options: ['০*১', '১*০', '১/০', '০/১'],
                answer:3
            },
            {
                q:'মাতা পিতাকে শ্রদ্ধা করা আমাদের —–',
                options: ['প্রথা', 'কর্তব্য', 'নিয়ম', 'ধর্ম'],
                answer:2
            },
            {
                q:'You should ask the —— about the train timing.',
                options: ['Station Master', 'Information Desk', 'Ticket Checker', 'Railway Police'],
                answer:2
            },
            {
                q:'আপনার দাদার ছেলের নাতির বাবার স্ত্রীর মা আপনার কি হয়?',
                options: ['দাদী', 'নানী', 'মা', 'শ্বাশুড়ী'],
                answer:4
            },
            {
                q:'উধর্তন কর্মকর্তা এক সপ্তাহের জন্য বাইরে যাবেন বলে সালমানকে পরিকল্পনাটা —- দিতে হবে?',
                options: ['সময়ের আগে', 'প্রত্যেককে', 'বাস্তবায়ন করে', 'শেষ করে'],
                answer:1
            },
            {
                q:'The word disco is a shortened version of which word ?',
                options: ['discotheque', 'discontinue', 'discomfiled', 'discompose'],
                answer:1
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