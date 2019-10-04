package cordova.plugin.apple.ApplemusicPlugin;

import com.apple.android.music.playback.controller.MediaPlayerController;
import com.apple.android.music.playback.controller.MediaPlayerControllerFactory;
import com.apple.android.music.playback.queue.CatalogPlaybackQueueItemProvider;
TokenProvider tokenProvider = new TokenProvider() {
    @Override
    public String getDeveloperToken() {
        return developerToken;
    }
    @Override
    public String getUserToken() {
        return userToken;
    }
};
MediaPlayerController playerController = MediaPlayerControllerFactory.createLocalController(context, tokenProvider);
MediaPlayerController playerController;
CatalogPlaybackQueueItemProvider.Builder queueProviderBuilder = new CatalogPlaybackQueueItemProvider.Builder();
builder.containers(MediaContainerType.ALBUM, "310730204");
playerController.prepare(queueProviderBuilder.build(), true);
