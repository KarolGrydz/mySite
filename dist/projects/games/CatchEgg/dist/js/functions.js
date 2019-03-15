$(document).on('mousemove', function(e) {
  basket.css('left', e.pageX);
});

function egg_down(egg) {
  egg_current_pos = parseInt(egg.css('top'));
  egg.css('top', egg_current_pos + speed);
}

function egg_down2(egg) {
  egg_current_pos = parseInt(egg.css('top'));
  egg.css('top', egg_current_pos + speed / 0.65);
}

function egg_down3(egg) {
  egg_current_pos = parseInt(egg.css('top'));
  egg.css('top', egg_current_pos + speed / 1.15);
}

function check_egg_hits_floor(egg) {
  if (collision(egg, floor)) {
    show_bullseye_eye(egg);
    decrementLife();
    return true;
  } else {
    return false;
  }
}

function set_egg_to_initial_pos(egg) {
  egg.css('top', egg_initial_position);
}

function show_bullseye_eye(egg) {
  bullseye_num = egg.attr('data-bullseye');
  $('#bullseye' + bullseye_num).show();
  hide_bullseye(bullseye_num);
}

function hide_bullseye(num) {
  setTimeout(function() {
    $('#bullseye' + num).hide();
  }, 800);
}

function decrementLife() {
  life--;
  life_span.text(life);
  if (life < 0) {
    life = 0;
    life_span.text(life);
  }
}

function check_egg_basket(egg) {
  if (collision(egg, basket)) {
    egg_top = parseInt(egg.css('top'));
    if (egg_top < basket_top) {
      update_score();
      return true;
    }
  }
  return false;
}

function update_score() {
  score++;
  if (score % 10 === 0 && speed <= max_speed) {
    speed++;
  }
  score_span.text(score);
  score_1.text(score);
}

function stop_the_game(anim) {
  if (score > localStorage.highestScore) {
    localStorage.highestScore = score;
    highScore.innerHTML = localStorage.highestScore;
  }
  cancelAnimationFrame(anim);
  restart.slideDown();
}

restart.click(function() {
  location.reload();
});

function showHighscore() {
  if (typeof Storage !== 'undefined') {
    if (localStorage.highestScore) {
      highScore.innerHTML = localStorage.highestScore;
    } else {
      localStorage.setItem('highestScore', 0);
    }
  } else {
    highScore.innerHTML =
      'Sorry, but your web browser dont support localStorage, please change or update your browser.';
  }
}
