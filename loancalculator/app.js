document.getElementById('loan-form').addEventListener('submit', function(e){

    // Hide the results
    document.getElementById('results').style.display = 'none';

    // Show the loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(){
    
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterets = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;

    const x = Math.pow(1 + calculatedInterets, calculatedPayments);
    const monthly = (principal*x*calculatedInterets)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2);

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById('loading').style.display = 'none';
        showError('Please check your numbers!');
    }
}

function showError(error){
    const errorDiv = document.createElement('div');

    errorDiv.className = "alert alert-danger";

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 2000);
}

function clearError(){
    document.querySelector('.alert-danger').remove();
}