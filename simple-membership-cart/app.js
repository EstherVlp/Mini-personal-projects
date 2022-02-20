let data = [
    {
        name: 'Lana',
        age: '28'
    },
    {
        name: 'Joe',
        age: '44'
    },
    {
        name: 'Mia',
        age: '22'
    },
    {
        name: 'Dan',
        age: '30'
    },
    {
        name: 'Sophie',
        age: '36'
    },
    {
        name: 'Pete',
        age: '25'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is' + ' ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');