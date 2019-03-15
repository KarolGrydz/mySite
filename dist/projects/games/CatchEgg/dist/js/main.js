$(function() {
  showHighscore();
  the_game = function() {
    if (check_egg_hits_floor(egg1) || check_egg_basket(egg1)) {
      set_egg_to_initial_pos(egg1);
    } else {
      egg_down(egg1);
    }

    if (check_egg_hits_floor(egg2) || check_egg_basket(egg2)) {
      set_egg_to_initial_pos(egg2);
    } else {
      egg_down2(egg2);
    }

    if (check_egg_hits_floor(egg3) || check_egg_basket(egg3)) {
      set_egg_to_initial_pos(egg3);
    } else {
      egg_down3(egg3);
    }

    if (life > 0) {
      anim_id = requestAnimationFrame(the_game);
    } else {
      stop_the_game(anim_id);
    }
  };

  anim_id = requestAnimationFrame(the_game);
});
