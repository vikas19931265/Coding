/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 714049
 */
public class Deductions extends javax.swing.JFrame {

    /**
     * Creates new form Deductions
     */
    public Deductions() {
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        sdf = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        pfField1 = new javax.swing.JTextField();
        othAmount = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        basicField1 = new javax.swing.JTextField();
        hraField1 = new javax.swing.JTextField();
        jLabel8 = new javax.swing.JLabel();
        rentField1 = new javax.swing.JTextField();
        Continue = new javax.swing.JButton();
        jButton1 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setPreferredSize(new java.awt.Dimension(500, 500));
        setResizable(false);

        jLabel1.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jLabel1.setText("Deductions");

        jLabel2.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        jLabel2.setText("Section-80C(Max 1.5L)");

        jPanel1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        jLabel3.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        jLabel3.setText("PF");

        jLabel4.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        jLabel4.setText("Other Amount(PF/PPF/FD)");

        othAmount.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                othAmountActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel4)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 21, Short.MAX_VALUE)
                        .addComponent(othAmount, javax.swing.GroupLayout.PREFERRED_SIZE, 109, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(pfField1, javax.swing.GroupLayout.PREFERRED_SIZE, 109, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(pfField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4)
                    .addComponent(othAmount, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(43, Short.MAX_VALUE))
        );

        jLabel5.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        jLabel5.setText("HRA");

        jPanel2.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        jLabel6.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        jLabel6.setText("Basic Salary(monthly)");

        jLabel7.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        jLabel7.setText("HRA by employeer");

        hraField1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                hraField1ActionPerformed(evt);
            }
        });

        jLabel8.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        jLabel8.setText("Rent paid(monthly)");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                        .addComponent(jLabel6, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jLabel7, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addComponent(jLabel8))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(hraField1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 109, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(basicField1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 109, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(rentField1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 109, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(basicField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(hraField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel8)
                    .addComponent(rentField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(18, Short.MAX_VALUE))
        );

        Continue.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        Continue.setText("Continue");
        Continue.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ContinueActionPerformed(evt);
            }
        });

        jButton1.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jButton1.setText("Back");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout sdfLayout = new javax.swing.GroupLayout(sdf);
        sdf.setLayout(sdfLayout);
        sdfLayout.setHorizontalGroup(
            sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(sdfLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2)
                    .addComponent(jLabel5))
                .addGap(18, 18, 18)
                .addGroup(sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap(20, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, sdfLayout.createSequentialGroup()
                .addGap(87, 87, 87)
                .addComponent(jButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(Continue)
                .addGap(33, 33, 33))
        );
        sdfLayout.setVerticalGroup(
            sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(sdfLayout.createSequentialGroup()
                .addGroup(sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(sdfLayout.createSequentialGroup()
                        .addGap(34, 34, 34)
                        .addComponent(jLabel2))
                    .addGroup(sdfLayout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGroup(sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(sdfLayout.createSequentialGroup()
                        .addGap(42, 42, 42)
                        .addComponent(jLabel5))
                    .addGroup(sdfLayout.createSequentialGroup()
                        .addGap(26, 26, 26)
                        .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 65, Short.MAX_VALUE)
                .addGroup(sdfLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(Continue)
                    .addComponent(jButton1)))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(sdf, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(198, 198, 198)
                        .addComponent(jLabel1)))
                .addContainerGap(84, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1)
                .addGap(34, 34, 34)
                .addComponent(sdf, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void othAmountActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_othAmountActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_othAmountActionPerformed

    private void hraField1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_hraField1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_hraField1ActionPerformed

    private void ContinueActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ContinueActionPerformed
        Deductions.deductions="yes";
        double pfsal=Double.parseDouble(pfField1.getText());
        SalarySlip.pfSal=pfsal;
        double otherAmount=Double.parseDouble(othAmount.getText());
        Deductions.otherAmount=otherAmount;
        String basicSal=basicField1.getText();
        String hra=hraField1.getText();
        String rent=rentField1.getText();

       if(!basicSal.isEmpty() && !hra.isEmpty() && !rent.isEmpty())
       {
        Deductions.basicSal=Double.parseDouble(basicSal);
        Deductions.hra=(Double.parseDouble(hra));
        Deductions.rent=(Double.parseDouble(rent));
       }

       else
       {
           Deductions.basicSal=0;
           Deductions.hra=0;
           Deductions.rent=0;
       }
        if(EmployeeDetails.finYear.equals("2018-19"))
         {
             System.out.println("going for fin year 18");
             SalarySlip.taxCalculatorDefaultSettingfin2018(SalarySlip.salary, SalarySlip.d, SalarySlip.pfSal);
         }
        else if(EmployeeDetails.finYear.equals("2019-20"))
         {
             System.out.println("going for fin year 2019");
             SalarySlip.taxCalculatorDefaultSettingfin2019(SalarySlip.salary, SalarySlip.d, SalarySlip.pfSal);
         }

    }//GEN-LAST:event_ContinueActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
       TaxCalculator.d.setVisible(true);
    }//GEN-LAST:event_jButton1ActionPerformed

    public static  double deductions()
    {
        SalarySlip.readyForCalculation=1;
        double grossSalIncludingPF=0.0;
        double deductionAmount=0;
        double totalMonths=0;
        if(EmployeeDetails.finYear.equals("2018-19"))
         {
        totalMonths=SalarySlip.monthsCalculator2018(0,SalarySlip.d, 0);
         }
        else
        {
             totalMonths=SalarySlip.monthsCalculator19(0,SalarySlip.d, 0);
        }
        System.out.println("total months are"+ totalMonths);
        if(SalarySlip.pfSal*totalMonths+otherAmount>150000)
        {
            grossSalIncludingPF=SalarySlip.salary-(150000-SalarySlip.pfSal*totalMonths);
//            deductionAmount=150000-SalarySlip.pfSal*totalMonths;
            // correction
            // adding new line
            deductionAmount=150000;

        }

        else
        {
            grossSalIncludingPF=SalarySlip.salary-otherAmount;
//            deductionAmount=otherAmount ;
            deductionAmount=otherAmount + (SalarySlip.pfSal*totalMonths);
        }
        System.out.println("gross including pf now is" + grossSalIncludingPF);



        double basicSalYearly=0;
        double hraYearly=0;
        double rentYearly=0;

        double amtFromHR=0;
        double actualRentPaid=0;
        double percentOfBasic=0;

         double minimumHRMonthly=0;

        int newTotalMonths=(int)totalMonths;
        double totalRentPaid=0.0;
        if(basicSal!=0 && hra!=0 && rent!=0)
        {


            basicSalYearly= basicSal*newTotalMonths;
            System.out.println("basic salary yearly is" + basicSalYearly);
            hraYearly=hra*newTotalMonths;
            rentYearly=rent*newTotalMonths;
            int monthly1= (int) totalMonths;
            amtFromHR=hra*newTotalMonths;
            actualRentPaid=rent*newTotalMonths-(0.1*basicSalYearly);
            System.out.println("rent is "+ rent);
            System.out.println("actual rent paid is " +actualRentPaid);
            System.out.println("newtotal months " +newTotalMonths);
            // changing yearly code to monthely

            double monthlyHRGiven=hra;
            double monthlyRentPaid=rent;//comp3
            double monthlyBasic=basicSal;

            double acutalMontlyRentGiven= rent-(0.1*monthlyBasic);
            double percentBasicMonthly=0;
            if(EmployeeDetails.metroCity.equalsIgnoreCase("yes")  )
            {
                System.out.println("metro city");
                percentBasicMonthly=0.5*(monthlyBasic);
            }
            else
            {   System.out.println("non metro city");
                percentBasicMonthly=0.4*(monthlyBasic);
            }

            System.out.println("monthly hr given"+monthlyHRGiven);
            System.out.println("acutal rent given"+ acutalMontlyRentGiven);
            System.out.println("percent of basic"+percentBasicMonthly);
        if(monthlyHRGiven<acutalMontlyRentGiven)
        {
            if(monthlyHRGiven<percentBasicMonthly)
            {
                minimumHRMonthly=monthlyHRGiven;
            }
            else
            {
                minimumHRMonthly=percentBasicMonthly;
            }

        }

        else
        {
            if(acutalMontlyRentGiven<percentBasicMonthly)
            {
                minimumHRMonthly=acutalMontlyRentGiven;
            }

            else
            {
                minimumHRMonthly=percentBasicMonthly;
            }
        }
minimumHRMonthly=minimumHRMonthly*newTotalMonths;
System.out.println("minimummonhtlyhr"+minimumHRMonthly);

             if(monthly1!=totalMonths)
            {
                // rent for whole number month
               int newMonth=(int)totalMonths;
               System.out.println("new month " + newMonth);
               rentYearly=rent*newMonth;
               System.out.println("rent yearly" + rentYearly);
               //actualRentPaid=rent*newMonth-(0.1*basicSalYearly);

               double basicSalPortion=(Deductions.basicSal/SalarySlip.noOfDaysMonth)*SalarySlip.noOfDaysSpent1;
               //System.out.println("salary"+ SalarySlip.salary);
               //System.out.println("months"+ SalarySlip.noOfDaysMonth);
               //System.out.println("no of days"+SalarySlip.noOfDaysSpent1);
               //System.out.println("basic sal portion" +basicSalPortion); // comp1
               basicSalYearly=basicSalYearly+basicSalPortion;
               double percentBasicMonthlyPortion=0;
               if(EmployeeDetails.metroCity.equalsIgnoreCase("yes")  )
            {
                System.out.println("metro city");
                percentBasicMonthlyPortion=0.5*(basicSalPortion);
            }
            else
            {   System.out.println("non metro city");
                percentBasicMonthlyPortion=0.4*(basicSalPortion);
            }
               double actualRentPaidPortion= rent-(0.1*basicSalPortion);// comp2
               double amtFromHRPortion=(hra/SalarySlip.noOfDaysMonth)*SalarySlip.noOfDaysSpent1;

              // find minimum between actulRentPaidPortion,monthlyhrgiven, percentBasicMonthly and add result to minimum hr
              if(amtFromHRPortion<percentBasicMonthlyPortion)
              {
                  if(amtFromHRPortion<actualRentPaidPortion)
                  {
                      minimumHRMonthly=minimumHRMonthly+amtFromHRPortion;
                  }
                  else
            {
                minimumHRMonthly=minimumHRMonthly+percentBasicMonthlyPortion;
            }

              }
              else
              {
                  if(percentBasicMonthlyPortion<actualRentPaidPortion)
                  {
                      minimumHRMonthly=minimumHRMonthly+percentBasicMonthlyPortion;
                  }

                  else
                  {
                      minimumHRMonthly=minimumHRMonthly+actualRentPaidPortion;
                  }
              }



            }

        }

        else
        {
        amtFromHR=0;
        actualRentPaid=0;
        percentOfBasic=0;
        }

        double minimumHR=0;
        if(amtFromHR<actualRentPaid)
        {
            if(amtFromHR<percentOfBasic)
            {
                minimumHR=amtFromHR;
            }
        }

        else
        {
            if(actualRentPaid<percentOfBasic)
            {
                minimumHR=actualRentPaid;
            }

            else
            {
                minimumHR=percentOfBasic;
            }
        }

        //minimumHR=minimumHR-289;
        System.out.println("hra applicable"+ minimumHRMonthly);
        grossSalIncludingPF=grossSalIncludingPF-minimumHRMonthly;
        System.out.println("gross including pf now is" + grossSalIncludingPF);


    return( deductionAmount+minimumHRMonthly);
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
            java.util.logging.Logger.getLogger(Deductions.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Deductions.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Deductions.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Deductions.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Deductions().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Continue;
    private javax.swing.JTextField basicField1;
    private javax.swing.JTextField hraField1;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTextField othAmount;
    private javax.swing.JTextField pfField1;
    private javax.swing.JTextField rentField1;
    private javax.swing.JPanel sdf;
    // End of variables declaration//GEN-END:variables

    public static String deductions="no";
    public static double otherAmount;
    public static double basicSal;
    public static double hra;
    public static double rent;

}
