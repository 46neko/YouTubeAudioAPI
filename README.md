YouTubeAudioAPI
====

HTML5のAudioタグと同じようにYouYubeを音源として使用できます。    
This API can play sounds from YouTube.  
It resembles Audio tag of HTML5.

## Demo
https://46neko.github.io/YouTubeAudioAPI/demo.html  
このデモはyaudioにautoplayとloopの両方のプロパティを設定してあります。  
そのためモバイル環境でなければ自動再生されます。  
ですが、モバイル環境ではPlayをタップした際に再生されます。  
その理由についてはUsageをご覧ください。  
As for this demonstration, both properties of autoplay and loop are set in yaudio.  
Therefore it is reproduced automatically if it is not mobile environment.  
But it play when I tapped Play in the mobile environment.  
If you want to know the reason, please see the Usage.

## Usage
### Prepare
もし使いたいサイトがSSL対応であれば  
If the site that you want to use supports SSL...

```html
<script src="https://46neko.github.io/YouTubeAudioAPI/YouTubeAudioAPI.js"></script>
```

そうでなければ  
If not so...

```html
<script src="http://46neko.github.io/YouTubeAudioAPI/YouTubeAudioAPI.js"></script>
```

とheadタグ内に記述してください。  
Please write the above text to the head tag.

### The style of the tag

```html
<yaudio id="test1" v="YouTubeID" autoplay loop></yaudio>
```

このようにyaudioタグをaudioタグのように記述します。  
autoplayやloopはAudioタグと同じように任意で記述します。  
Please describe yaudio tag like audio tag in this way.  
Please describe autoplay and loop for an option in the same way as Audio tag.

### Control playback
再生を制御するために、これらのコードが使用できます。  
idにはエレメントのidを記述します。  
You can use these cords to control reproduction.  
Please describe the id of the element in the argument id.

```javascript
ytaControls.play(id)
ytaControls.pause(id)
ytaControls.seekTo(id,secounds)
ytaControls.getCurrentTime(id)
ytaControls.getLoadedFraction(id)
ytaControls.getDuration(id)
ytaControls.setVolume(id,volume)
ytaControls.getVolume(id)
ytaControls.mute(id)
ytaControls.unMute(id)
ytaControls.isMuted(id)
ytaControls.change(id,v)
```

**これらのコードの詳細**  
**A details of these cords**  
  
**ytaControls.play(id)**  
頭出し済み、または読み込み済みの音声を再生します。  
Plays the currently cued/loaded audio.  
  
**ytaControls.pause(id)**  
再生中の音声を一時停止します。  
Stops and cancels loading of the current audio.  
  
**ytaControls.seekTo(id,secounds)**  
音声を指定された時間シークします。  
Seeks to a specified time in the audio.  
  
**ytaControls.getCurrentTime(id)**  
音声の再生を開始してからの経過時間を秒数で返します。  
Returns the elapsed time in seconds since the audio started playing.  
  
**ytaControls.getLoadedFraction(id)**  
プレーヤーがバッファ済みの音声の割合を0～1の数値で返します。  
Returns a number between 0 and 1 that specifies the percentage of the audio that the player shows as buffered.  
  
**ytaControls.getDuration(id)**  
再生中の動画の長さを秒数で返します。音声のメタデータが読み込まれるまで、getDuration()は0を返します。  
Returns the duration in seconds of the currently playing audio. Note that getDuration() will return 0 until the audio's metadata is loaded.  
  
**ytaControls.setVolume(id,volume)**  
音量を設定します。0～100の整数値を指定します。  
Sets the volume. Accepts an integer between 0 and 100.  
  
**ytaControls.getVolume(id)**  
プレーヤーの現在の音量を0～100の整数値で返します。getVolume()は、プレーヤーがミュートされている場合でも音量を返します。  
Returns the player's current volume, an integer between 0 and 100. Note that getVolume() will return the volume even if the player is muted.  
  
**ytaControls.mute(id)**  
プレーヤーをミュートします。  
Mutes the player.  
  
**ytaControls.unMute(id)**  
プレーヤーのミュートを解除します。  
Unmutes the player.    
  
**ytaControls.isMuted(id)**  
プレーヤーがミュートされている場合はtrueを、ミュートされていない場合はfalseを返します。  
Returns true if the player is muted, false if not.  
  
**ytaControls.change(id,v)**  
yaudioタグは、v属性を直接変更して音源として使用する動画を変更することができません。  
そのため動画の変更はこのコードを使用して行います。  
引数vにはYouTubeIDを記述します。  
Changing the v attribute of the yaudio tag does not change the sound source.  
Therefore please perform the change of the video with this cord.  
Please describe YouTubeID in argument v.