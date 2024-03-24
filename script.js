let window.currentAddress="Not Detected";
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(document).ready(function()
{console.log("chech1");
 console.log(window.currentAddress);
 if(window.currentAddress!="Not Detected"){
	 console.log("chech1");
	 document.getElementById('notconnected').style.display = 'none'; 
	 console.log("chech");
 }
});

async function connect() {
        if (window.ethereum) {
            console.log("This is DApp Environment");
            var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            window.currentAddress = accounts[0];

            // Replace 'abi' and 'address' with your contract's ABI and address
            var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referralCode",
				"type": "address"
			}
		],
		"name": "EtherSent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "points",
				"type": "uint256"
			}
		],
		"name": "PointsReceived",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_referralCode",
				"type": "address"
			}
		],
		"name": "sendEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawReferralRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referralCodes",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referralRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalWithdrawableReferralRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
            
var address = '0x7153c91DA09B6caBd6AB5cADA007dFc74C645c87';  // Put your contract address here

web3 = new Web3(window.ethereum);
window.ethereum.enable();
mycontract = new web3.eth.Contract(abi, address);
console.log(mycontract);
          


            //document.getElementById("rdBtn").addEventListener("click", rd);
            //document.getElementById("snd1Btn").addEventListener("click", snd1);
            //document.getElementById("snd2Btn").addEventListener("click", snd2);

        } else {
            console.log("Please connect with MetaMask");
        }

}


function rd() {
                mycontract.methods.retrieve().call().then((res) => {
                    console.log("Retrieve result:", res);
                }).catch((err) => {
                    console.error("Error calling retrieve function:", err);
                });
            }

function snd1() {
                mycontract.methods.sendEther('0x4694B0Ea0adCEf5d1ee9C402747DCfdeC8D76611').send({ from: window.currentAddress, value: web3.utils.toWei('0.01', 'ether')})
                    .then(() => {
                        console.log("Store success!");
                    }).catch((err) => {
                        console.error("Error calling store function:", err);
                    });
            }

          
function snd2() {
                mycontract.methods.deposit().send({ from: window.currentAddress, value: web3.utils.toWei('10', 'ether') })
                    .then(() => {
                        console.log("Deposit success!");
                    }).catch((err) => {
                        console.error("Error calling deposit function:", err);
                    });
            }

$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });
});
