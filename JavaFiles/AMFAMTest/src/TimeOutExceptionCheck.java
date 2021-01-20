
class TimeOutExceptionCheck {

    public static void test() {
        int i=0;
        try {
            if(i<2)
            {
                throw new java.util.concurrent.TimeoutException();
            }
           i=3; 
        } catch (java.util.concurrent.TimeoutException t) {
            t.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();

        }

    }

    public static void main(String[] args)
    {
        test();
    }

}
