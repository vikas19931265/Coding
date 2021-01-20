
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import java.util.Calendar;
import java.util.Date;
import javax.swing.JOptionPane;

public class SalarySlip extends javax.swing.JFrame {

    public SalarySlip() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents()
    {

        jLabel1 = new javax.swing.JLabel();
        pf = new javax.swing.JLabel();
        pfField = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setPreferredSize(new java.awt.Dimension(450, 290));
        setResizable(false);

        jLabel1.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("Salary Breakup");
        jLabel1.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        pf.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        pf.setText("PF(monthly)");

        pfField.addActionListener(new java.awt.event.ActionListener()
        {
            public void actionPerformed(java.awt.event.ActionEvent evt)
            {
                pfFieldActionPerformed(evt);
            }
        });

        jButton1.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jButton1.setText("Continue");
        jButton1.addActionListener(new java.awt.event.ActionListener()
        {
            public void actionPerformed(java.awt.event.ActionEvent evt)
            {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jButton2.setText("Back");
        jButton2.addActionListener(new java.awt.event.ActionListener()
        {
            public void actionPerformed(java.awt.event.ActionEvent evt)
            {
                jButton2ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(jLabel1))
                    .addGroup(javax.swing.GroupLayout.Alignment.LEADING, layout.createSequentialGroup()
                        .addGap(39, 39, 39)
                        .addComponent(pf)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 61, Short.MAX_VALUE)
                        .addComponent(pfField, javax.swing.GroupLayout.PREFERRED_SIZE, 94, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(140, 140, 140))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(52, 52, 52)
                .addComponent(jButton2, javax.swing.GroupLayout.PREFERRED_SIZE, 88, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jButton1)
                .addGap(85, 85, 85))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1)
                .addGap(74, 74, 74)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(pf)
                    .addComponent(pfField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(56, 56, 56)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButton1)
                    .addComponent(jButton2))
                .addContainerGap(86, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void pfFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_pfFieldActionPerformed

    }//GEN-LAST:event_pfFieldActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed

        String pf = pfField.getText();
        String pfStatus = "";

        if (!pf.isEmpty()) {
            try {
                pfSal = Integer.parseInt(pf);
                pfStatus = "valid";
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(new SalarySlip(), "invalid pf!!");
            }

        } else {
            JOptionPane.showMessageDialog(new SalarySlip(), "pf cant be blank!!");
        }

        if (pfStatus.equals("valid")) {
            readyForCalculation = 1;
        }

        if(EmployeeDetails.finYear.equals("2018-19"))
        {
        taxCalculatorDefaultSettingfin2018(SalarySlip.salary, SalarySlip.d, SalarySlip.pfSal);

        }
         if(EmployeeDetails.finYear.equals("2019-20"))
        {
        taxCalculatorDefaultSettingfin2019(SalarySlip.salary, SalarySlip.d, SalarySlip.pfSal);

        }


    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        TaxCalculator.d.setVisible(true);
    }//GEN-LAST:event_jButton2ActionPerformed

    public static void taxCalculatorDefaultSettingfin2018(double salary, Date d, double pfSal) {
        System.out.println("salary :" + salary + "date is " + d + "pf sal" + pfSal);
        if (readyForCalculation == 1) {
            int standardDeduction = 40000;
            double taxableSalaryAfterStdDeduction;
            double totalTax = 0;
            double totalTaxAfterCess = 0.0;
            double monthlyTax = 0;
            double cessCharges = 0;
            Calendar cn = Calendar.getInstance();
            cn.setTime(d);
            int date = cn.get(Calendar.DATE);
            cn.setTime(d);
            int month = cn.get(Calendar.MONTH);
            System.out.println("date" + date + "month " + month);
            if (date == 1 && (month + 1) == 4) {
                taxableSalaryAfterStdDeduction = salary - (pfSal * 12 * 2) - profTax - standardDeduction;
                System.out.println("sal after ded " + taxableSalaryAfterStdDeduction);
                if (taxableSalaryAfterStdDeduction > 1000000) {

                    totalTax = ((taxableSalaryAfterStdDeduction - 1000000) * (0.3)) + (50000 * (0.2)) + 12500 + cessCharges;
                    cessCharges = (totalTax * 0.04);
                    totalTaxAfterCess = totalTax + cessCharges;
                    monthlyTax = totalTaxAfterCess / 12;
                } else if (taxableSalaryAfterStdDeduction > 500000 && taxableSalaryAfterStdDeduction < 1000000) {

                    totalTax = ((taxableSalaryAfterStdDeduction - 500000) * (0.2)) + 12500 + cessCharges;
                    cessCharges = (totalTax * 0.04);
                    totalTaxAfterCess = totalTax + cessCharges;
                    System.out.println("total tax " + totalTaxAfterCess);
                    monthlyTax = totalTaxAfterCess / 12;
                } else if (taxableSalaryAfterStdDeduction > 250000 && taxableSalaryAfterStdDeduction <= 500000) {
                    System.out.println("taxable componet control");
                    totalTax = 12500;
                    cessCharges = (totalTax * 0.04);
                    totalTaxAfterCess = totalTax + cessCharges;
                    System.out.println("total tax " + totalTaxAfterCess);
                    monthlyTax = totalTaxAfterCess / 12;
                } else {
                    totalTaxAfterCess = 0.0;
                    monthlyTax = 0;
                }

                JOptionPane.showMessageDialog(new SalarySlip(), "total tax:" + Math.round(totalTaxAfterCess) + "\n" + "approx monthly tax:" + Math.round(monthlyTax) + "\nprofessional tax(yearly):" + profTax);
            } else {
                System.out.println("control reached");
                Date startDate = d;
                System.out.println("start date is " + startDate);
                String endDate1 = "31/03/2020";
                try {

                    Calendar c1 = Calendar.getInstance();
                    c1.setTime(startDate);
                    int date1 = c1.get(Calendar.DATE);
                    int month1 = c1.get(Calendar.MONTH); // here month starts from 0
                    int year1 = c1.get(Calendar.YEAR);
                    System.out.println("dat1" + date1 + "month" + month1 + "year" + year1);
                    LocalDate startDate1 = LocalDate.of(year1, month1 + 1, date1); // here month starts from 1
                    System.out.println("stdate" + startDate1);
                    LocalDate endDate = LocalDate.of(2020, 3, 31);
                    System.out.println(endDate);
                    Period age = Period.between(startDate1, endDate);
                    int months = age.getMonths();
                    System.out.println("months between dates" + months);
                    int years = age.getYears();
                    System.out.println("years" + years);
                    int noOfDays = c1.getActualMaximum(Calendar.DAY_OF_MONTH);
                    System.out.println(noOfDays);
                    int noOfDaysSpent = noOfDays - date1 + 1;
                    System.out.println("days spend" + noOfDaysSpent);
                    double daysSal = ((salary / 12) / noOfDays) * noOfDaysSpent - (pfSal / noOfDays) * noOfDaysSpent;
                    if (daysSal < 0) {
                        daysSal = 0;
                    }
                    double monthsSal = (salary / 12) * months - (pfSal * months);
                    double variablePay = EmployeeDetails.varFields;
                    double totalSal = daysSal + monthsSal + variablePay;
                    double totalYearlyPF = (pfSal / noOfDays) * noOfDaysSpent + (pfSal * months);
                    double monthsInFraction = noOfDaysSpent / noOfDays;
                    System.out.println("days sal" + daysSal + "monthsSal" + monthsSal + "totalSal" + totalSal);

                    System.out.println(monthsSal + " " + totalSal);
                    // totalSal=totalSal-40000-totalYearlyPF;
                    System.out.println("new total Sal" + totalSal);
                    System.out.println("total sal passed is" + totalSal);
                    taxCalculation18(totalSal, months, totalYearlyPF, monthsInFraction);

//  JOptionPane.showMessageDialog(new SalarySlip(),"break sal" + totalSal);
                } catch (Exception e) {

                }

            }

            //JOptionPane.showMessageDialog(new SalarySlip(),"total tax:"+Math.round(totalTaxAfterCess)+"\n"+"approx monthly tax:" + Math.round(monthlyTax) +"\nprofessional tax(yearly):" + profTax);
        }

    }
public static void taxCalculatorDefaultSettingfin2019(double salary, Date d, double pfSal) {
        System.out.println("salary :" + salary + "date is " + d + "pf sal" + pfSal);
        if (readyForCalculation == 1) {
            int standardDeduction = 50000;
            double taxableSalaryAfterStdDeduction;
            double totalTax = 0;
            double totalTaxAfterCess = 0.0;
            double monthlyTax = 0;
            double cessCharges = 0;
            Calendar cn = Calendar.getInstance();
            cn.setTime(d);
            int date = cn.get(Calendar.DATE);
            cn.setTime(d);
            int month = cn.get(Calendar.MONTH);
            System.out.println("date" + date + "month " + month);
            if (date == 1 && (month + 1) == 4) {
                taxableSalaryAfterStdDeduction = salary - (pfSal * 12 * 2) - profTax - standardDeduction;
                System.out.println("sal after ded " + taxableSalaryAfterStdDeduction);
                if (taxableSalaryAfterStdDeduction > 1000000) {

                    totalTax = ((taxableSalaryAfterStdDeduction - 1000000) * (0.3)) + (500000 * (0.2)) + 12500 + cessCharges;
                    cessCharges = (totalTax * 0.04);
                    totalTaxAfterCess = totalTax + cessCharges;
                    System.out.println("total tax after cess" +totalTaxAfterCess);
                    monthlyTax = totalTaxAfterCess / 12;
                } else if (taxableSalaryAfterStdDeduction > 500000 && taxableSalaryAfterStdDeduction < 1000000) {

                    totalTax = ((taxableSalaryAfterStdDeduction - 500000) * (0.2)) + 12500 + cessCharges;
                    cessCharges = (totalTax * 0.04);
                    totalTaxAfterCess = totalTax + cessCharges;
                    System.out.println("total tax " + totalTaxAfterCess);
                    monthlyTax = totalTaxAfterCess / 12;

                } else {
                    totalTaxAfterCess = 0.0;
                    monthlyTax = 0;
                }

                JOptionPane.showMessageDialog(new SalarySlip(), "total tax:" + Math.round(totalTaxAfterCess) + "\n" + "approx monthly tax:" + Math.round(monthlyTax) + "\nprofessional tax(yearly):" + profTax);
            } else {
                System.out.println("control reached");
                Date startDate = d;
                System.out.println("start date is " + startDate);
                String endDate1 = "31/03/2020";
                try {

                    Calendar c1 = Calendar.getInstance();
                    c1.setTime(startDate);
                    int date1 = c1.get(Calendar.DATE);
                    int month1 = c1.get(Calendar.MONTH); // here month starts from 0
                    int year1 = c1.get(Calendar.YEAR);
                    System.out.println("dat1" + date1 + "month" + month1 + "year" + year1);
                    LocalDate startDate1 = LocalDate.of(year1, month1 + 1, date1); // here month starts from 1
                    System.out.println("stdate" + startDate1);
                    LocalDate endDate = LocalDate.of(2020, 3, 31);
                    System.out.println(endDate);
                    Period age = Period.between(startDate1, endDate);
                    int months = age.getMonths();
                    System.out.println("months between dates" + months);
                    int years = age.getYears();
                    System.out.println("years" + years);
                    int noOfDays = c1.getActualMaximum(Calendar.DAY_OF_MONTH);
                    System.out.println(noOfDays);
                    int noOfDaysSpent = noOfDays - date1 + 1;
                    System.out.println("days spend" + noOfDaysSpent);
                    double daysSal = ((salary / 12) / noOfDays) * noOfDaysSpent - (1890 / noOfDays) * noOfDaysSpent;
                    if (daysSal < 0) {
                        daysSal = 0;
                    }
                    double monthsSal = (salary / 12) * months - (1890 * months);
                    double variablePay = EmployeeDetails.varFields;;
                    double totalSal = daysSal + monthsSal + variablePay;
                    double totalYearlyPF = (pfSal / noOfDays) * noOfDaysSpent + (pfSal * months);
                    double monthsInFraction = noOfDaysSpent / noOfDays;
                    System.out.println("days sal" + daysSal + "monthsSal" + monthsSal + "totalSal" + totalSal);

                    System.out.println(monthsSal + " " + totalSal);
                    // totalSal=totalSal-40000-totalYearlyPF;
                    System.out.println("new total Sal" + totalSal);
                    System.out.println("total sal passed is" + totalSal);
                    taxCalculation19(totalSal, 9, totalYearlyPF, monthsInFraction);

//  JOptionPane.showMessageDialog(new SalarySlip(),"break sal" + totalSal);
                } catch (Exception e) {

                }

            }

            //JOptionPane.showMessageDialog(new SalarySlip(),"total tax:"+Math.round(totalTaxAfterCess)+"\n"+"approx monthly tax:" + Math.round(monthlyTax) +"\nprofessional tax(yearly):" + profTax);
        }

    }
    public static void taxCalculation18(double totalSal, int month, double TotalYearlyPF, double monthsInFraction) {
        System.out.println("total sal reached is " + totalSal);
        System.out.println("months" + month + "prof" + profTax);
        System.out.println("total pf" + TotalYearlyPF);
        double newProfTax = profTax;
        if (month <= 6) {
            newProfTax = profTax / 2;
        }
        System.out.println("profTax" + newProfTax);
        double totalMonths = month + monthsInFraction;
        int standardDeduction = 40000;
        System.out.println("new total sal is" + totalSal);
        double taxableSalaryAfterStdDeduction = totalSal - standardDeduction - TotalYearlyPF - (newProfTax);
        System.out.println("taxable salary after deduction" + taxableSalaryAfterStdDeduction);
        double totalTax = 0;
        double totalTaxAfterCess = 0.0;
        double monthlyTax = 0;
        double cessCharges = 0;
        if (taxableSalaryAfterStdDeduction > 1000000) {

            totalTax = ((taxableSalaryAfterStdDeduction - 1000000) * (0.3)) + (50000 * (0.2)) + 12500 + cessCharges;
            cessCharges = (totalTax * 0.04);
            totalTaxAfterCess = totalTax + cessCharges;
            monthlyTax = totalTaxAfterCess / totalMonths;
        } else if (taxableSalaryAfterStdDeduction > 500000 && taxableSalaryAfterStdDeduction < 1000000) {

            totalTax = ((taxableSalaryAfterStdDeduction - 500000) * (0.2)) + 12500 + cessCharges;
            cessCharges = (totalTax * 0.04);
            totalTaxAfterCess = totalTax + cessCharges;
            System.out.println("total tax " + totalTaxAfterCess);
            monthlyTax = totalTaxAfterCess / totalMonths;

        }

        else if(taxableSalaryAfterStdDeduction>250000 && taxableSalaryAfterStdDeduction<=500000)
          {
              System.out.println("control reached here");
              System.out.println("new tax sal"+ totalTax);
              totalTax= (taxableSalaryAfterStdDeduction-250000)*0.05-2500;
              System.out.println("total tax coming is "+ totalTax);
              cessCharges=(totalTax*0.04);
              totalTaxAfterCess=totalTax+cessCharges;
              System.out.println("total tax "+ totalTaxAfterCess);
              monthlyTax=totalTaxAfterCess/totalMonths;
              System.out.println(monthlyTax);
          }


        else {
            totalTaxAfterCess = 0.0;
            monthlyTax = 0;
        }

        JOptionPane.showMessageDialog(new SalarySlip(), "total tax:" + Math.round(totalTaxAfterCess) + "\n" + "approx monthly tax:" + Math.round(monthlyTax) + "\nprofessional tax(yearly):" + newProfTax);

    }
 public static void taxCalculation19(double totalSal, int month, double TotalYearlyPF, double monthsInFraction) {
        System.out.println("total sal reached is " + totalSal);
        System.out.println("months" + month + "prof" + profTax);
        System.out.println("total pf" + TotalYearlyPF);
        double newProfTax = profTax;
        if (month <= 6) {
            newProfTax = profTax / 2;
        }
        System.out.println("profTax" + newProfTax);
        double totalMonths = month + monthsInFraction;
        int standardDeduction = 50000;
        System.out.println("new total sal is" + totalSal);
        double taxableSalaryAfterStdDeduction = totalSal - standardDeduction - TotalYearlyPF - (newProfTax);
        System.out.println("taxable salary after deduction" + taxableSalaryAfterStdDeduction);
        double totalTax = 0;
        double totalTaxAfterCess = 0.0;
        double monthlyTax = 0;
        double cessCharges = 0;
        if (taxableSalaryAfterStdDeduction > 1000000) {

            totalTax = ((taxableSalaryAfterStdDeduction - 1000000) * (0.3)) + (50000 * (0.2)) + 12500 + cessCharges;
            cessCharges = (totalTax * 0.04);
            totalTaxAfterCess = totalTax + cessCharges;
            monthlyTax = totalTaxAfterCess / totalMonths;
        } else if (taxableSalaryAfterStdDeduction > 500000 && taxableSalaryAfterStdDeduction < 1000000) {

            totalTax = ((taxableSalaryAfterStdDeduction - 500000) * (0.2)) + 12500 + cessCharges;
            cessCharges = (totalTax * 0.04);
            totalTaxAfterCess = totalTax + cessCharges;
            System.out.println("total tax " + totalTaxAfterCess);
            monthlyTax = totalTaxAfterCess / totalMonths;

        } else {
            totalTaxAfterCess = 0.0;
            monthlyTax = 0;
        }

        JOptionPane.showMessageDialog(new SalarySlip(), "total tax:" + Math.round(totalTaxAfterCess) + "\n" + "approx monthly tax:" + Math.round(monthlyTax) + "\nprofessional tax(yearly):" + newProfTax);

    }


    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(SalarySlip.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(SalarySlip.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(SalarySlip.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(SalarySlip.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new SalarySlip().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel pf;
    private javax.swing.JTextField pfField;
    // End of variables declaration//GEN-END:variables
    static Integer pfSal;
    static int readyForCalculation;
    static double salary;
    static Date d;
    static double profTax;
}
