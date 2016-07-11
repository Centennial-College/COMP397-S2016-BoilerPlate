/**
 * This is the generic scenes namespace
 * 
 * @module scenes
 */
module scenes {
    /**
     * This Menu scene extends the objects.Scene object 
     * 
     * @export
     * @class GameOver
     * @extends {objects.Scene}
     */
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _startButton: objects.Button;
        private _helloWorldLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Menu.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the menu scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public start(): void {

            // add the HELLO WORLD Label to the MENU scene
            this._helloWorldLabel = new objects.Label(
                "HELLO WORLD",
                "60px",
                "Arial",
                "#000",
                200,
                200);
            this.addChild(this._helloWorldLabel);

            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "startButton",
                200,
                400,
                true);
            this.addChild(this._startButton);

            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
        }

        /**
         * Update game objects in the gameover scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public update(): void {

        }


        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the click event
         * 
         * @private
         * @method _startOverButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _startButtonClick(event: createjs.MouseEvent) {
            this._helloWorldLabel.text = "You clicked on me!";
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++