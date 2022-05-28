
const container = document.querySelector('ul');
const input = document.querySelector('input');

input.addEventListener('keyup', async (ev) => {
    let age = input.value;

    if(ev.keyCode === 13) {
        let users = await (fetch(`./user/${age}`).then((r) => r.json()));

        container.innerHTML = '';
        users.forEach((user) => {
            const li = document.createElement('li');
            li.innerHTML = `${user.name} - ${user.age} - ${user.job}`;
            container.appendChild(li);
        });
    }
});
