package AbstractAndInterfacesPgm;

class Parents {

    public int value = 10;

    public Parents() {
        System.out.println("Parent constructor is called");
        System.out.println("current object is "+ this.getClass().getName());
        this.value=300;
        System.out.println("value " + value);
        this.value=300;
    }

    public void setValue(int value) {
        value = value;
    }

}

class Childs extends Parents {

    public Childs() {
        super();
        System.out.println("Child constructor is called");
    }

    public void setValue(int value) {
        super.setValue(value);
    }

    public int getValue() {
        return value;
    }

}

class Client {

    public static void main(String[] args) {
        Childs c = new Childs();
        c.setValue(200);
        System.out.println(c.getValue());
    }
}
