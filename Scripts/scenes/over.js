var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * This is the generic scenes namespace
 *
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This Over scene extends the objects.Scene object
     *
     * @export
     * @class Over
     * @extends {objects.Scene}
     */
    var Over = (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Over.
         */
        function Over() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the Over scene
         *
         * @public
         * @method Start
         * @returns {void}
         */
        Over.prototype.Start = function () {
            // Add GameOver Label
            this._gameOverLabel = new objects.Label("GAME OVER SCENE", "60px", "Consolas", "#000", 320, 240);
            this.addChild(this._gameOverLabel);
            // add the restart button
            this._restartButton = new objects.Button("restartButton", 320, 420, true);
            this.addChild(this._restartButton);
            // Restart button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // Add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the Over scene
         *
         * @public
         * @method Update
         * @returns {void}
         */
        Over.prototype.Update = function () {
            // scene updates happen here...
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the click event
         *
         * @private
         * @method _restartOverButtonClick
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        Over.prototype._restartButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=over.js.map