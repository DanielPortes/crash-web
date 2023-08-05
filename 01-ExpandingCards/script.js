painels = document.querySelectorAll('.panel');
active = document.querySelector('.active');

painels.forEach((painel) =>
    {
        painel.addEventListener('click', () =>
        {
            if (!painel.classList.contains('active'))
            {
                removeActiveClasses();
                painel.classList.add('active');
            }
        });
    }
);

function removeActiveClasses()
{
    painels.forEach((painel) =>
    {
        painel.classList.remove('active');
    });
}