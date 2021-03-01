var peer = new Peer();

peer.on('open', function (id) {
    console.log('My peer ID is: ' + id);
    chrome.storage.sync.set({connectionId: id})
});

peer.on('connection', (conn) => {

    conn.on('data', (data) => {
        console.log(data)
        const video = document.querySelector('video');
        switch (data) {
            case 'play':
                if (video.paused) {
                    video.play()
                } else {
                    video.pause()
                }
                break
            case 'forward':
                alert('forward')
                break
            case 'back':
                alert('back')
                break
        }
    })

    const urlParams = new URLSearchParams(window.location.search);
    const v = urlParams.get('v');
    const video = document.querySelector('video');

    setInterval(function () {
        console.log('ping')

        conn.send({
            'v': v,
            'time': video.currentTime
        })
    }, 1000)
});
