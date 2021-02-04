<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>quiz</title>
        <!-- bootstrap css -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!-- external css -->
        <link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/quiz.css">
	</head>
	<body>

                <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container"> 
            <a class="navbar-brand" href="likhapora.php">বাতিঘর</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="likhapora.php">হোম<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            মডেল টেস্ট
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">ব্যাংক মডেল টেস্ট</a>
                            <a class="dropdown-item" href="#">বিসিএস মডেল টেস্ট</a>
                            <a class="dropdown-item" href="#">শিক্ষক নিবন্ধন মডেল টেস্ট</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            MCQ অনুশীলন
                        </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="analitical.php">Analitical </a>
                            <a class="dropdown-item" href="computer-knowledge.php">Computer Knowledge</a>
                            <a class="dropdown-item" href="#">English for Bank</a>
                            <a class="dropdown-item" href="#">General English</a>
                            <a class="dropdown-item" href="#">International Affairs</a>
                            <a class="dropdown-item" href="#">Math for Bank</a>
                            <a class="dropdown-item" href="#">General Math</a>
                            <a class="dropdown-item" href="#">Bangla</a>
                            <a class="dropdown-item" href="#">Bangla for Bank</a>
                            <a class="dropdown-item" href="#">Bangladesh Affairs</a>
                            <a class="dropdown-item" href="#">General Knowledge</a>
                            <a class="dropdown-item" href="#">General Science</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            স্কুল ভিত্তিক
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">জে এস সি </a>
                            <a class="dropdown-item" href="#">এস এস সি</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            সংক্ষিপ্ত প্রশ্ন
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">আন্তর্জাতিক </a>
                            <a class="dropdown-item" href="#">সাধারন জ্ঞান</a>
                            <a class="dropdown-item" href="#">দেশীয়</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            শিক্ষণীয়
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">টিপস </a>
                            <a class="dropdown-item" href="#">কভার লেটার</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            লাইব্রেরি
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">পিডিএফ </a>
                        </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">লগইন/রেজিস্ট্রেশন</a>
                  </li>
                </ul>
            </div>
         </div>   
    </nav>

    <div class="container-fluid">
    	<div class="row">
            <div class="col-md-9">
                <div class="quiz-wrapper">       
                    <div id="questionBox" class="question">
                        Sample Question
                    </div>
                    <div class="options">
                        <ul id="ul">
                            <li id="opt1" onclick="button(this)"></li>
                            <li id="opt2" onclick="button(this)"></li>
                            <li id="opt3" onclick="button(this)"></li>
                            <li id="opt4" onclick="button(this)"></li>
                        </ul>
                    </div>
                    <div class="score">
                        <div class="next">
                            <button id="btnNext" type="button" onclick="next()">
                              Next
                            </button>
                        </div>
                        <div class="score-card">
                            SCORE: <span id="scoreCard">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mcq-list bg-success mt-4">
                    <h3 class="mb-2 text-center">MCQ TEST</h3>
                    <hr>
                    <div class="list-group">
                        <a href="analitical.html" class="list-group-item list-group-item-action active bg-warning">
                            Analitical
                        </a>
                        <a href="computer-knowledge.html" class="list-group-item list-group-item-action">Computer Knowledge</a>
                      <a href="#" class="list-group-item list-group-item-action">English for Bank</a>
                      <a href="#" class="list-group-item list-group-item-action">General English</a>
                      <a href="#" class="list-group-item list-group-item-action">International Affairs</a>
                      <a href="#" class="list-group-item list-group-item-action">Math for bank</a>
                      <a href="#" class="list-group-item list-group-item-action">General Math</a>
                      <a href="#" class="list-group-item list-group-item-action">Bangla</a>
                      <a href="#" class="list-group-item list-group-item-action">Bangla for Bank</a>
                      <a href="#" class="list-group-item list-group-item-action">Bangladesh Affairs</a>
                      <a href="#" class="list-group-item list-group-item-action">General Knowledge</a>
                      <a href="#" class="list-group-item list-group-item-action">General Science</a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
		

        <!-- bootstrap js -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
		<script type="text/javascript" src="js/analitical.js"></script>
	</body>
</html>