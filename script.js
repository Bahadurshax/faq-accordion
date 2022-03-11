const container = document.querySelector('#acc-card');
 
const FAQ = [
	{
		id: 1,
		question: 'How many team members can I invite',
		answer: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
	},
	{
		id: 2,
		question: 'What is the maximum file upload size',
		answer: `No more than 2GB. All files in your account must fit your allotted storage space.`,
	},
	{
		id: 3,
		question: 'How do I reset my password',
		answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
	},
	{
		id: 4,
		question: 'Can I cancel my subscription',
		answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
	},
	{
		id: 5,
		question: 'Do you provide additional support',
		answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
	},
];

const toHTML = acc => {
	return `
<div class="acc">
	<div class="acc-header">
		<h3 class="acc-title" data-switcher="true" data-id="${acc.id}">${acc.question}?</h3>
		<img src="images/icon-arrow-down.svg" alt="arrowBtn" class="acc-btn" data-switcher="true" data-id="${acc.id}">
	</div>
	<div class="acc-body" id="${acc.id}">
		<p class="acc-text">${acc.answer}</p>
	</div>
</div>`;
};

function render() {
	const html = FAQ.map(acc => toHTML(acc)).join('');
	container.innerHTML += html;
}

render();

container.addEventListener('click', event => {
	const btnType = event.target.dataset.switcher;
	const id = +event.target.dataset.id;
	const accArr = [...container.querySelectorAll('.acc-body')];
	const selectedAcc = accArr.find(a => +a.id === id)
	const unselected = accArr.filter(a => +a.id !== id);
	
	if (btnType == 'true') {

		selectedAcc.classList.toggle('show');
		document.querySelectorAll('.acc-btn')[id-1].classList.toggle('rotate');
		document.querySelectorAll('.acc-title')[id-1].classList.toggle('bold');
		
		unselected.forEach(a => {
			a.classList.remove('show');
			document.querySelectorAll('.acc-title')[a.id-1].classList.remove('bold');
			document.querySelectorAll('.acc-btn')[a.id-1].classList.remove('rotate');
		})
	}
});
