document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/events')
    .then(response => response.json())
    .then(data => {
        const eventList = document.getElementById('event-list');
        data.forEach(event => {
            const li = document.createElement('li');
            li.textContent = '${event.title} - ${event.date}';
            eventList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching events:', error));
});