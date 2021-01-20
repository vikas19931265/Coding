package Operators;





class Example21
{
    
    public static void main(String[] args)
    {
        int x =150;
        
        short s =(short)x;
        
        System.out.println(s);//150
        
        /*
        
        how this done
        -----------------
       
        
        1. 150 is equivalent to 010010110
        
        2. It has to be considered in 32 bits hence 00000......010010110
        
        3. Now we are trying to typecast it to short type, hence MSB will be lost
           of 32 bits and we have to consider last 16 bits only.
        
        4.000....010010110( 16bits)---> 0 msb hence number is positive.
        
        5. For positive number least signifcant bits forms the value
        
        6. LSB is (010010110=150) hence 150 is our answer.
        
        
        */
        
    
    
        byte b1= (byte)x;
        
        System.out.println(b1);
        
        /*
        
        1. 150 is equivalent to 010010110
        
        2. It has to be considered in 32 bits hence 00000......010010110
        
        3. Now we are trying to typecast it to byte type, hence MSB will be lost
           of 32 bits and we have to consider last 8 bits only.
        
        4. These are last 8 bits(10010110)
        
        5. sign is 1( hence negative number) and since its negative number value
           will be drawn from least significant bit using 2s complement.
        
            
            0010110
                |
              1s complement
           -----------------   
            1101001
                  1----->2s complement
        -----------------------
            1101010
        -----------------
        
        1   1   0   1   0   1   0
        
        2^6 2^5 2^4 2^3 2^2 2^1 2^0  =  -106
            
        */
    
    
    }
}
