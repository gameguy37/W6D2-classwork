class View {
    constructor(game, rootEl) {
        this.game = game;
        this.rootEl = rootEl;
        this.setupTowers();
        // this.render();
    }

    setupTowers() {
        const $board = $('<ul>');
        for (let i = 0; i <= 2; i++) {
            let $tower = $('<li>');
            let $pile = $('<ul>');
            $tower.data('pos', i + 1);

            for (let i = 0; i <= 2; i++) {
                $pile.append($('<li>test</li>'));
            }

            $tower.append($pile);
            $board.append($tower);

        }

        $('.hanoi').append($board);
    }
    
}

module.exports = View;
