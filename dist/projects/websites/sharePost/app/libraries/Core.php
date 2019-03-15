<?php 

	/*
	* App Core Class
	* Creates URL and load core controler
	* URL FORMAT - /controller/method/params
	*/

	class Core {
		protected $currentController = 'Pages';
		protected $currentMethod = 'index';
		protected $params = [];

		public function __construct() {
			//print_r($this->getUrl());

			$url = $this->getUrl();

			//Check in controllers for first value
			if (file_exists('../app/controllers/' . ucwords($url[0]) . '.php')) {
				//if exists set as controller
				$this->currentController = ucwords($url[0]);
				//unset 0 index
				unset($url[0]);
			}

			//Required the controler
			require_once '../app/controllers/' . $this->currentController . '.php';

			//Instatinate controller class
			$this->currentController = new $this->currentController;
			//Check for second part of URL
			if (isset($url[1])) {
				// Check if method second exist in controller
				if (method_exists($this->currentController, $url[1])) {
					$this->currentMethod = $url[1];
					//unset 1 index
					unset($url[1]);
				}
			}

			//Get params
			$this->params = $url ? array_values($url) : [];

			//call a callback with array with params
			call_user_func_array([$this->currentController, $this->currentMethod], $this->params);
		}

		public function getUrl(){
			if (isset($_GET['url'])) {
				$url = rtrim($_GET['url'], '/');
				$url = filter_var($url, FILTER_SANITIZE_URL);
				$url = explode('/', $url);
				return $url;
			}
		}
	} 

 ?>