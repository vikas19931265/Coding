package CreationalDesignPattern_FactoryDesign;

/*
Adapter Design Pattern: (Structural Design pattern category)

This design pattern is used in order to connect two different interfaces of different
behaviour types with the help of the simple adapter classs.


1. I Create MediaPlayer interface whose childs can play only MP3 Devices.
2. Then i created AdvancedAudioPlayer interface whose childs can play both
   vlc and mp3 devices.
3. Now the main aim of this program is to enable the mp3 devices to be able to 
   play vlc and mp4 files with the help of adapter.



*/


interface MediaPlayer
{
    public void play(String type);
}

//-----------------------------------------------------------------------------

interface AdvancedAudioPlayer
{
    public void VLC(String type);
    public void MP4(String type);
}

//------------------------------------------------------------------------------

class VLCPlayer implements AdvancedAudioPlayer
{
    public void VLC(String type)
    {
        
        System.out.println("Playing"+ type);
    }
    
    public void MP4(String type)
   {
       
   }
  
}

//------------------------------------------------------------------------------


class MP4 implements AdvancedAudioPlayer
{
    public void MP4(String type)
    {
        
        System.out.println("Playing"+ type);
        
    }

    
    public void VLC(String type)
    {
        
    }
    
    
}

//-----------------------------------------------------------------------------


class AudioAdapter implements MediaPlayer
{
    
    AdvancedAudioPlayer adp;
    
    AudioAdapter(String type)
    {
        if(type.equalsIgnoreCase("vlc"))
        {
            adp = new VLCPlayer();
        }
        
        else if(type.equalsIgnoreCase("mp4"))
        {
            adp = new MP4();
        }
    }
    
    public void play(String type)
    {
        
        if(type.equalsIgnoreCase("VLC"))
        {
            
            adp= new VLCPlayer();
            
            adp.VLC(type);
            
        }
        
    
        else if(type.equalsIgnoreCase("MP4"))
        {
            
            adp= new MP4();
            
            adp.MP4(type);
            
        }
        
     }
     
    
}

//-----------------------------------------------------------------------------
/*

1. This device of MP3 Type can play only MP3 files.
2. In order to enable this device to play MP4 and VLC files
   i have provided it with adapter.
3. Whenever we are trying to play vlc or mp4 file an adapter object is created
   whose constructor takes type of file as parameter and then play the file.
   


*/

class MediaPlayerMP3Device implements MediaPlayer
{
    
    AudioAdapter ad;
    
    public void play(String type)
    {
        
        if(type.equalsIgnoreCase("mp3"))
        {
            System.out.println("Playing"+type);
        }
    
        else if(type.equalsIgnoreCase("vlc"))
        {
            ad= new AudioAdapter(type);
            ad.play(type);
            
        }
        
        else if (type.equalsIgnoreCase("mp4"))
        {
            ad= new AudioAdapter(type);
            ad.play(type);
            
        }
        
        
    }
    
    
    
}


//-----------------------------------------------------------------------------




 class DriverClass
{
    public static void main(String[] args)
    {
        MediaPlayerMP3Device a = new MediaPlayerMP3Device();
        a.play("vlc"); // mp3 device able to play all the kind of files.
        a.play("mp4");
        a.play("mp3");
        
    }
    
    
}