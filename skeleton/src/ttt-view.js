class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', e => {
      this.makeMove($(e.target));
    });
    
  }
  
  makeMove($square) {
    if (this.game.board.isEmptyPos($square.data('pos'))) {  
      this.game.playMove($square.data('pos'));
      $square.addClass(`${this.game.currentPlayer}`);
      $square.text(`${this.game.currentPlayer}`);
    } else {
      alert("Yeah.....you're dumb");
    }
    const $winner = $('<p> Game Over </p>');
    if (this.game.isOver()) {
      this.$el.addClass('game-over');
      this.$el.off('click');
      this.$el.append($winner);
    }
  }

  setupBoard() {
    const $grid = $('<ul>');
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        let $sq = $('<li>');
        $sq.data('pos', [i,j]);
        $grid.append($sq);
      }
    }
    $('.ttt').append($grid);
  }

}

module.exports = View;
