package ScenarioProgramming;

import java.io.*;
import java.util.*;

class A5FileAssignmentInterview {

    ArrayList fileElements = new ArrayList();
    HashMap<String, ArrayList<HashMap<String, Integer>>> elements = new HashMap<>();

    public HashMap objectDetails() {
        File f = new File("//home//vikas//Desktop//RAWTEXT");
        if (f.isFile()) {
            try {
                FileReader fr = new FileReader(f);
                BufferedReader br = new BufferedReader(fr);
                String line = br.readLine();
                while (line != null) {
                    fileElements.add(line);
                    line = br.readLine();
                }
            } catch (FileNotFoundException e) {
                System.out.println("File Not Found");
                e.printStackTrace();
            } catch (IOException o) {
                o.printStackTrace();
            }
        } else {
            System.err.println("Invalid path!!!!");
        }

        Collections.sort(fileElements);
        Iterator itr = fileElements.iterator();
        while (itr.hasNext()) {
            String classe = "";
            String method = "";
            String value = "";
            int flag = 0;
            int i;
            ArrayList<HashMap<String, Integer>> l1 = new ArrayList<>();
            Integer integer = new Integer(1);
            HashMap<String, Integer> m2 = new HashMap<>();
            String line = (String) itr.next();
            for (i = 0; i < line.length(); i++) {
                int charAsciiValue = (int) line.charAt(i);
                String charStringValue = Character.valueOf(line.charAt(i)).toString();
                if (flag == 1 && charStringValue.equals(".")) {
                    if (!elements.containsKey(classe)) {
                        elements.put(classe, l1);
                    }
                    flag = 2;
                    continue;
                }

              if (flag == 4) {
                    int lastindex = line.length() - 1;
                    if (i == lastindex) {
                        value = value + line.charAt((i));
                        ArrayList<HashMap<String, Integer>> addElement = elements.get(classe);

                        m2.put(method, Integer.parseInt(value));
                        addElement.add(m2);
                        elements.put(classe, addElement);
                        continue;
                    }
                    value = value + line.charAt((i));

                    continue;
                }

                if (flag == 2) {
                    if (charStringValue.equals("=")) {
                        flag = 4;
                        continue;

                    }
                    method = method + line.charAt(i);
                    continue;

                }

                if (charAsciiValue >= 65 && charAsciiValue <= 90) {
                    flag = 1;
                }

                classe = classe + (Character.valueOf(line.charAt(i))).toString();

            }

        }

        return elements;

    }

    public void displayObjectDetails(HashMap elements) {

        Set s = elements.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m1 = (Map.Entry) itr.next();
            System.out.println("<<" + m1.getKey() + ">>");

            ArrayList l = (ArrayList) m1.getValue();
            Iterator itr3 = l.iterator();
            while (itr3.hasNext()) {
                HashMap m3 = (HashMap) itr3.next();
                Set s3 = m3.entrySet();
                Iterator it4 = s3.iterator();
                while (it4.hasNext()) {
                    Map.Entry m4 = (Map.Entry) it4.next();
                    System.out.println("        <<" + m4.getKey() + ">>=" + "<<" + m4.getValue() + ">>");

                }
            }

            System.out.println();

        }
    }

    public void uniqueClasses(HashMap m) {

        Set s = m.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext()) {
            Map.Entry m1 = (Map.Entry) itr.next();
            System.out.println(m1.getKey());
        }
    }

    public void checkUniqueMethods(HashMap m, String className) {
        if (m.containsKey(className)) {
            ArrayList<HashMap<String, Integer>> values = (ArrayList) m.get(className);
            Iterator itr = values.iterator();
            while (itr.hasNext()) {
                HashMap<String, Integer> m2 = (HashMap) itr.next();
                Set s = m2.entrySet();
                Iterator itr7 = s.iterator();
                while (itr7.hasNext()) {
                    Map.Entry m7 = (Map.Entry) itr7.next();
                    System.out.println(m7.getKey());
                }
            }
        }

    }

    public void checkMethodCount(HashMap m, String className, String methodName) {
        if (m.containsKey(className)) {
            ArrayList<HashMap<String, Integer>> values = (ArrayList) m.get(className);
            Iterator itr = values.iterator();
            while (itr.hasNext()) {
                HashMap<String, Integer> m2 = (HashMap) itr.next();
                Set s = m2.entrySet();
                Iterator itr7 = s.iterator();
                while (itr7.hasNext()) {
                    Map.Entry m7 = (Map.Entry) itr7.next();
                    if (m7.getKey().equals(methodName)) {
                        System.out.println("The count is " + m7.getValue());
                    }

                }
            }
        }
    }

}

class Driver {

    static A5FileAssignmentInterview f1 = new A5FileAssignmentInterview();

    public static void main(String[] args) {
        Scanner cn2 = new Scanner(System.in);
        HashMap m5 = f1.objectDetails();

        while (true) {
            System.out.println();
            System.out.println("=======File Assignment==========");
            System.out.println("Choose from the list");
            System.out.println();
            System.out.println("1.Display class, methods and count information");
            System.out.println("2.Check List of unique classes");
            System.out.println("3.Check unique methods[taking class arg]");
            System.out.println("4.Check method count based on class and method argument");
            System.out.println("5.Exit");
            System.out.println("============================");
            System.out.println("Enter your option");
            Scanner cn = new Scanner(System.in);
            int choice = cn.nextInt();
            switch (choice) {
                case 1:
                    f1.displayObjectDetails(m5);
                    break;

                case 2:
                    f1.uniqueClasses(m5);
                    break;
                case 3:

                    System.out.println("Provide class name");

                    String className = cn2.nextLine();

                    f1.checkUniqueMethods(m5, className);
                    break;
                case 4:
                    System.out.println("Provide class name");
                    System.out.println("==================");
                    String className1 = cn2.nextLine();
                    System.out.println("Provide method name");
                    System.out.println("===================");
                    String methodName = cn2.nextLine();
                    f1.checkMethodCount(m5, className1, methodName);

                case 5:
                    System.exit(0);

            }
        }
    }
}
