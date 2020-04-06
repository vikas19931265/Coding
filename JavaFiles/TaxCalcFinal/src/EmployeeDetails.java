
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.swing.JOptionPane;

public class EmployeeDetails extends javax.swing.JFrame {

    public EmployeeDetails() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel6 = new javax.swing.JLabel();
        jTextField3 = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        doj = new javax.swing.JLabel();
        dateField = new javax.swing.JFormattedTextField();
        gross = new javax.swing.JLabel();
        variableField = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        dedField = new javax.swing.JComboBox<>();
        name = new javax.swing.JLabel();
        nameField = new javax.swing.JTextField();
        gender = new javax.swing.JLabel();
        company = new javax.swing.JLabel();
        companyField = new javax.swing.JTextField();
        genField = new javax.swing.JComboBox<>();
        jButton2 = new javax.swing.JButton();
        company1 = new javax.swing.JLabel();
        stateField = new javax.swing.JComboBox<>();
        jLabel2 = new javax.swing.JLabel();
        finField = new javax.swing.JComboBox<>();
        jLabel3 = new javax.swing.JLabel();
        grossField1 = new javax.swing.JTextField();
        metro = new javax.swing.JLabel();
        metroyes = new javax.swing.JRadioButton();
        metroNo = new javax.swing.JRadioButton();

        jLabel6.setFont(new java.awt.Font("Times New Roman", 0, 14)); // NOI18N
        jLabel6.setText("Name");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 0, 102));
        setResizable(false);

        jLabel1.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("Employee Details");
        jLabel1.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);

        doj.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        doj.setText("Date Of Joining Finanical year");

        dateField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                dateFieldActionPerformed(evt);
            }
        });

        gross.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        gross.setText("Gross Salary");

        variableField.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        variableField.setText("0");

        jLabel4.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        jLabel4.setText("Do you have deductions?");

        dedField.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        dedField.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Yes", "No" }));

        name.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        name.setText("Name");

        nameField.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N

        gender.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        gender.setText("Gender");

        company.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        company.setText("Company");

        companyField.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N

        genField.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        genField.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "M", "F" }));

        jButton2.setFont(new java.awt.Font("Times New Roman", 3, 18)); // NOI18N
        jButton2.setText("Continue");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        company1.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        company1.setText("State");

        stateField.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        stateField.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Andhra Pradesh", "Andaman and Nicobar Islands", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal" }));
        stateField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                stateFieldActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        jLabel2.setText("Financial Year");

        finField.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "2018-19", "2019-20" }));

        jLabel3.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        jLabel3.setText("Bonus/Variable/Incentive");

        grossField1.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N

        metro.setFont(new java.awt.Font("Times New Roman", 2, 14)); // NOI18N
        metro.setText("Do you stay in metro city?");

        metroyes.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        metroyes.setLabel("yes");

        metroNo.setFont(new java.awt.Font("Times New Roman", 2, 12)); // NOI18N
        metroNo.setText("no");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(name)
                                    .addComponent(gender)
                                    .addComponent(company1))
                                .addGap(210, 210, 210)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(stateField, javax.swing.GroupLayout.PREFERRED_SIZE, 122, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(genField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(nameField)))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel4)
                                .addGap(108, 108, 108)
                                .addComponent(dedField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(49, 77, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(doj)
                                    .addComponent(gross)
                                    .addComponent(company)
                                    .addComponent(jLabel2)
                                    .addComponent(metro))
                                .addGap(72, 72, 72)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(layout.createSequentialGroup()
                                        .addComponent(metroyes, javax.swing.GroupLayout.PREFERRED_SIZE, 61, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(18, 18, 18)
                                        .addComponent(metroNo, javax.swing.GroupLayout.PREFERRED_SIZE, 58, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addComponent(finField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(companyField, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(dateField, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(grossField1, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel3)
                                .addGap(107, 107, 107)
                                .addComponent(variableField, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(0, 0, Short.MAX_VALUE))))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabel1)
                .addGap(158, 158, 158))
            .addGroup(layout.createSequentialGroup()
                .addGap(163, 163, 163)
                .addComponent(jButton2)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jLabel1)
                .addGap(26, 26, 26)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(name)
                    .addComponent(nameField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(gender)
                    .addComponent(genField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(company1)
                    .addComponent(stateField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(metro)
                    .addComponent(metroyes)
                    .addComponent(metroNo))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(finField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(company)
                    .addComponent(companyField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(doj)
                    .addComponent(dateField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(gross)
                    .addComponent(grossField1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(variableField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel4)
                    .addComponent(dedField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(33, 33, 33)
                .addComponent(jButton2, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(28, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void dateFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_dateFieldActionPerformed

    }//GEN-LAST:event_dateFieldActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed

        String name = nameField.getText();
        String nameStatus = "";
        String companyStatus = "";
        String salNotTaxable = "no";
        Pattern p = Pattern.compile("[deductiona-zA-Z]");
        Matcher m = p.matcher(name);
        if (!name.isEmpty()) {
            if (m.find()) {
                nameStatus = "valid";

            } else {
                // TaxCalculator.slip.setVisible(true);
                // TaxCalculator.d.setVisible(false);
                JOptionPane.showMessageDialog(new EmployeeDetails(), "Invalid name!!");
            }
        } else {
            JOptionPane.showMessageDialog(new EmployeeDetails(), "name cannot be blank!!");
        }
        String metroStatus="valid";
        if (!name.isEmpty() && nameStatus.equals("valid")) {
            if (!metroyes.isSelected() && !metroNo.isSelected()) {
                metroStatus="invalid";
                JOptionPane.showMessageDialog(new EmployeeDetails(), "do u stay in metro field cannot be empty!!");
            
            } else {
                if (metroyes.isSelected()) {
                    String metro = metroyes.getText();
                    EmployeeDetails.metroCity = metro;
                } else {
                    String metro = metroNo.getText();
                    EmployeeDetails.metroCity = metro;
                }
            }
            System.out.println("metro value is " + EmployeeDetails.metroCity);
        }
        if (!name.isEmpty() && nameStatus.equals("valid") && metroStatus.equalsIgnoreCase("valid")) {
            String company = companyField.getText();
            Pattern p1 = Pattern.compile("[a-zA-Z0-9]");
            Matcher m1 = p1.matcher(company);
            if (!company.isEmpty()) {
                if (!m1.find()) {
                    JOptionPane.showMessageDialog(new EmployeeDetails(), "Invalid company!!");

                } else {
                    TaxCalculator.d.setVisible(false);
                    companyStatus = "valid";
                }
            } else {
                JOptionPane.showMessageDialog(new EmployeeDetails(), "company cannot be blank!!");
            }
        }

        String doj = dateField.getText();
        String dateStatus = "";
        Date d = null;
        if (nameStatus.equals("valid") && companyStatus.equals("valid") && metroStatus.equals("valid")) {
            if (!doj.isEmpty()) {
                try {
                    d = new SimpleDateFormat("dd/MM/yyyy").parse(doj);
                    Calendar c = Calendar.getInstance();
                    c.setTime(d);
                    double year = c.get(Calendar.YEAR);
                    if (year == 2019 || year == 2020 || year==2018) {
                        dateStatus = "valid";
                    } else {
                        TaxCalculator.d.setVisible(true);
                        JOptionPane.showMessageDialog(new EmployeeDetails(), "Tax calculation applicable for FY 2018-19 and 2019-20!!");
                        
                    }

                } catch (ParseException e) {
                    TaxCalculator.d.setVisible(true);
                    JOptionPane.showMessageDialog(new EmployeeDetails(), "Invalid date!!");
                }
            } else {
               
               TaxCalculator.d.setVisible(true);
                JOptionPane.showMessageDialog(new EmployeeDetails(), "DOJ cannot be blank!!");
            }
        }
        String grossSal = grossField1.getText();
        String allIsWell = "invalid";
        Double salary = 0d;

        if (nameStatus.equals("valid") && companyStatus.equals("valid") && dateStatus.equals("valid") && metroStatus.equals("valid")) {
            if (!grossSal.isEmpty()) {
                try {
                    salary = Double.parseDouble(grossSal);
                    allIsWell="valid";
                } catch (NumberFormatException e) {
                    allIsWell="invalid";
                    TaxCalculator.d.setVisible(true);
                    JOptionPane.showMessageDialog(new EmployeeDetails(), "invalid salary");
                }
            } else {
                salary=0.0;
                TaxCalculator.d.setVisible(true);
                JOptionPane.showMessageDialog(new EmployeeDetails(), "salary cannot be empty");
            }
        }
            String financialYear = (String) finField.getSelectedItem();
            finYear=financialYear;
            String genderSex = (String) genField.getSelectedItem();
            String state = (String) stateField.getSelectedItem();
            EmployeeDetails.state=state;
            String VP="invalid";
            double variable=0;
            if (nameStatus.equals("valid") && companyStatus.equals("valid") && dateStatus.equals("valid") && metroStatus.equals("valid") && allIsWell.equals("valid")) {
                    
                    try {
                        if(!variableField.getText().isEmpty())
                        {
                        variable = Double.parseDouble((String) variableField.getText());
                        System.out.println("variable pay amount is " + variable);
                        VP="valid";
                        }
                        else
                        {
                            VP="valid";
                        }
                    } catch (NumberFormatException e) {
                        VP="invalid";
                        TaxCalculator.d.setVisible(true);
                        JOptionPane.showMessageDialog(new EmployeeDetails(), "invalid variable/bonus pay");
                    }

                    EmployeeDetails.varField1 = variable;
                }
            
            double profTax = professionalTaxCalculator(state, salary, genderSex, salNotTaxable, financialYear);
            if (salNotTaxable.equals("yes")) {

            }
            System.out.println("nameStatus:" +nameStatus+ "companystatus: " + companyStatus+"datestatus :"+ dateStatus+" alliswell :" +allIsWell +"salnottax:" +salNotTaxable+" fin year:" +financialYear +"metro status " +metroStatus + "VPstatus : " +VP );
            if (nameStatus.equals("valid") && companyStatus.equals("valid") && dateStatus.equals("valid") && financialYear.equals("2018-19") && metroStatus.equals("valid") && allIsWell.equals("valid") && VP.equals("valid")) {

                System.out.println("entered insdie");
                if (dedField.getSelectedItem().equals("No")) {

                    TaxCalculator.slip.setVisible(true);

                    SalarySlip.salary = salary;
                    SalarySlip.profTax = profTax;
                    SalarySlip.d = d;
                    // SalarySlip.taxCalculatorDefaultSetting(salary,d);

                }

               else if(dedField.getSelectedItem().equals("Yes"))
                {
                    SalarySlip.salary = salary;
                    SalarySlip.profTax = profTax;
                    SalarySlip.d = d;
                    TaxCalculator.deduction.setVisible(true);
                   // TaxCalculator.deduction.deductions();
                }


                TaxCalculator.d.setVisible(false);
            }

            if (nameStatus.equals("valid") && companyStatus.equals("valid") && dateStatus.equals("valid") && financialYear.equals("2019-20") && metroStatus.equals("valid") && allIsWell.equals("valid")&&VP.equals("valid")) {

                if (dedField.getSelectedItem().equals("No")) {
                    if(salary-50000>500000)
                    {
                    TaxCalculator.d.setVisible(false);
                    TaxCalculator.deduction.setVisible((false));
                    TaxCalculator.slip.setVisible(true);

                    SalarySlip.salary = salary;
                    SalarySlip.profTax = profTax;
                    SalarySlip.d = d;
                    }
                    else if(salary-50000<500000)
                    {
                        TaxCalculator.d.setVisible(true);
                        JOptionPane.showMessageDialog(new EmployeeDetails(), "your salary is not taxable!!\n professional tax(yearly): " + profTax);
                    }
                    // SalarySlip.taxCalculatorDefaultSetting(salary,d);

                }

                 else if(dedField.getSelectedItem().equals("Yes"))
                {
                    SalarySlip.salary = salary;
                    SalarySlip.profTax = profTax;
                    SalarySlip.d = d;
                    TaxCalculator.deduction.setVisible(true);
                    TaxCalculator.d.setVisible((false));
                   // TaxCalculator.deduction.deductions();
                }
            }

    }//GEN-LAST:event_jButton2ActionPerformed

    public double professionalTaxCalculator(String state, double salary, String genderSex, String salNotTaxable, String financialYear) {
        ArrayList<String> statesPayTax = new ArrayList<>();
        double professionalTax = 0.0;
        double monthlySalary = salary / 12;
        String genData = (String) genField.getSelectedItem();
        statesPayTax.add("Karnataka");
        statesPayTax.add("Madhya Pradesh");
        statesPayTax.add("Andhra Pradesh");
        statesPayTax.add("Tamil Nadu");
        statesPayTax.add("West Bengal");
        statesPayTax.add("Telangana");
        statesPayTax.add("Gujarat");
        statesPayTax.add("Assam");
        statesPayTax.add("Chhattisgarh");
        statesPayTax.add("Kerala");
        statesPayTax.add("Meghalaya");
        statesPayTax.add("Odisha");
        statesPayTax.add("Tripura");
        statesPayTax.add("Maharashtra");
        statesPayTax.add("Sikkim");
        statesPayTax.add("Jharkhand ");
        statesPayTax.add("Bihar");
        statesPayTax.add("Punjab");
        System.out.println("monthly salary is"+monthlySalary +"salary is " + salary);
        if (!statesPayTax.contains(state)) {
            professionalTax = 0.0;
        } else if (state.equals("Andhra Pradesh")) {
            if (monthlySalary <= 15000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 15001 && monthlySalary <= 20000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 20001) {
                professionalTax = 200 * 2;
            }

        } else if (state.equals("Karnataka")) {
            if (monthlySalary <= 15000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 15001 && monthlySalary <= 20000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 20001) {
                professionalTax = 200 * 2;
            }

        } else if (state.equals("Assam")) {
            if (monthlySalary <= 10000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 10001 && monthlySalary <= 15000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 15001 && monthlySalary <= 24999) {
                professionalTax = 180 * 2;
            } else if (monthlySalary >= 25000) {
                professionalTax = 208 * 2;
            }
        } else if (state.equals("Bihar")) {
            if (monthlySalary <= 25000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 25001 && monthlySalary <= 41666) {
                professionalTax = 83.33 * 2;
            } else if (monthlySalary >= 41667 && monthlySalary <= 83333) {
                professionalTax = 166.67;
            } else if (monthlySalary >= 83334) {
                professionalTax = 208.33 * 2;
            }
        } else if (state.equals("Goa")) {
            if (monthlySalary <= 15000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 15001 && monthlySalary <= 25000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 25001) {
                professionalTax = 200 * 2;
            }
        } else if (state.equals("Gujarat")) {
            if (monthlySalary <= 5999) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 6000 && monthlySalary <= 8999) {
                professionalTax = 80 * 2;
            } else if (monthlySalary >= 9000 && monthlySalary <= 11999) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 12000) {
                professionalTax = 200 * 2;
            }
        } else if (state.equals("Jharkhand")) {
            if (monthlySalary <= 25000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 25001 && monthlySalary <= 41666) {
                professionalTax = 100 * 2;
            } else if (monthlySalary >= 41667 && monthlySalary <= 66666) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 66667 && monthlySalary <= 83333) {
                professionalTax = 175 * 2;
            } else if (monthlySalary >= 83334) {
                professionalTax = 208 * 2;
            }
        } else if (state.equals("Karnataka")) {
            if (monthlySalary <= 15000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 15001) {
                professionalTax = 200 * 2;
            }
        } else if (state.equals("Kerala")) {
            if (monthlySalary <= 1999) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 2000 && monthlySalary <= 2999) {
                professionalTax = 120 * 2;
            } else if (monthlySalary >= 3000 && monthlySalary <= 4999) {
                professionalTax = 180 * 2;
            } else if (monthlySalary >= 5000 && monthlySalary <= 7499) {
                professionalTax = 300 * 2;
            } else if (monthlySalary >= 7500 && monthlySalary <= 9999) {
                professionalTax = 450 * 2;
            } else if (monthlySalary >= 10000 && monthlySalary <= 12499) {
                professionalTax = 600 * 2;
            } else if (monthlySalary >= 12500 && monthlySalary <= 16666) {
                professionalTax = 750 * 2;
            } else if (monthlySalary >= 16667 && monthlySalary <= 20833) {
                professionalTax = 1000 * 2;
            } else if (monthlySalary >= 20884) {
                professionalTax = 1250 * 2;
            }
        } else if (state.equals("Madhya Pradesh")) {
            if (monthlySalary <= 18750) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 18751 && monthlySalary <= 25000) {
                professionalTax = 125 * 2;
            } else if (monthlySalary >= 25001 && monthlySalary <= 33333) {
                professionalTax = 167 * 2;
            } else if (monthlySalary >= 33334) {
                professionalTax = 208 + 212;
            }
        } else if (state.equals("Maharashtra")) {
            if (monthlySalary <= 7500 && genData.equals("M")) {
                professionalTax = 0.0;
            } else if (monthlySalary <= 10000 && genData.equals("F")) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 7501 && monthlySalary <= 10000) {
                professionalTax = 175 * 2;
            } else if (monthlySalary >= 10001) {
                professionalTax = 200 + 300;
            }
        } else if (state.equals("Meghalaya")) {
            if (monthlySalary <= 4166) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 4167 && monthlySalary <= 6250) {
                professionalTax = 16.5 * 2;
            } else if (monthlySalary >= 6251 && monthlySalary <= 8333) {
                professionalTax = 25 * 2;
            } else if (monthlySalary >= 8334 && monthlySalary <= 12500) {
                professionalTax = 41.5 * 2;
            } else if (monthlySalary >= 12501 && monthlySalary <= 16666) {
                professionalTax = 62.5 * 2;
            } else if (monthlySalary >= 16667 && monthlySalary <= 20833) {
                professionalTax = 83.3 * 2;
            } else if (monthlySalary >= 20834 && monthlySalary <= 25000) {
                professionalTax = 104.16 * 2;
            } else if (monthlySalary >= 25001 && monthlySalary <= 29166) {
                professionalTax = 125 * 2;
            } else if (monthlySalary >= 29167 && monthlySalary <= 33333) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 33334 && monthlySalary <= 37500) {
                professionalTax = 175 * 2;
            } else if (monthlySalary >= 37501 && monthlySalary <= 41666) {
                professionalTax = 200 * 2;
            } else if (monthlySalary >= 41667) {
                professionalTax = 208 + 212;
            }
        } else if (state.equals("Sikkim")) {
            if (monthlySalary <= 20000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 20001 && monthlySalary <= 30000) {
                professionalTax = 125 * 2;
            } else if (monthlySalary >= 30001 && monthlySalary <= 40000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 40000) {
                professionalTax = 200 * 2;
            }

        } else if (state.equals("Tripura")) {
            if (monthlySalary <= 50000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 5001 && monthlySalary <= 7000) {
                professionalTax = 420 * 2;
            } else if (monthlySalary >= 7001 && monthlySalary <= 9000) {
                professionalTax = 720 * 2;
            } else if (monthlySalary >= 9001 && monthlySalary <= 12000) {
                professionalTax = 840 * 2;
            } else if (monthlySalary >= 12001 && monthlySalary <= 15000) {
                professionalTax = 1140 * 2;
            } else if (monthlySalary >= 15501) {
                professionalTax = 2496;
            }

        } else if (state.equals("Odisha")) {
            if (monthlySalary <= 13304) {
                professionalTax = 0.0;
            } else if (monthlySalary > 13305 && monthlySalary <= 25000) {
                professionalTax = 125 * 2;
            } else if (monthlySalary >= 25501) {
                professionalTax = 200 + 300;
            }

        } else if (state.equals("Nagaland")) {
            if (monthlySalary <= 4000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 4001 && monthlySalary <= 5000) {
                professionalTax = 35 * 2;
            } else if (monthlySalary >= 5001 && monthlySalary <= 7000) {
                professionalTax = 75 * 2;
            } else if (monthlySalary >= 7001 && monthlySalary <= 9000) {
                professionalTax = 110 * 2;
            } else if (monthlySalary >= 9001 && monthlySalary <= 12000) {
                professionalTax = 180 * 2;
            } else if (monthlySalary >= 12001) {
                professionalTax = 208 * 2;
            }

        } else if (state.equals("Punjab")) {
            if (monthlySalary >= 20833) {
                professionalTax = 200 * 2;
            } else {
                professionalTax = 0.0;
            }

        } else if (state.equals("Tamil Nadu")) {
            if (monthlySalary <= 3500) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 3501 && monthlySalary <= 5000) {
                professionalTax = 135 * 2;
            } else if (monthlySalary >= 5001 && monthlySalary <= 7500) {
                professionalTax = 315 * 2;
            } else if (monthlySalary >= 7501 && monthlySalary <= 10000) {
                professionalTax = 690 * 2;
            } else if (monthlySalary >= 10001 && monthlySalary <= 12500) {
                professionalTax = 1025 * 2;
            } else if (monthlySalary >= 12501) {
                professionalTax = 1250 * 2;
            }
        } else if (state.equals("Telangana")) {
            if (monthlySalary <= 15000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 15001 && monthlySalary <= 20000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 20001) {
                professionalTax = 200 * 2;
            }
        } else if (state.equals("West Bengal")) {
            if (monthlySalary <= 10000) {
                professionalTax = 0.0;
            } else if (monthlySalary >= 10001 && monthlySalary <= 15000) {
                professionalTax = 110 * 2;
            } else if (monthlySalary >= 15001 && monthlySalary <= 25000) {
                professionalTax = 130 * 2;
            } else if (monthlySalary >= 25001 && monthlySalary <= 40000) {
                professionalTax = 150 * 2;
            } else if (monthlySalary >= 40001) {
                professionalTax = 200 * 2;
            }
        }
        if (salNotTaxable.equals("yes") && financialYear.equals("2019-20")) {
            JOptionPane.showMessageDialog(new EmployeeDetails(), "your salary is not taxable!!\n professional tax(yearly): " + professionalTax);
        }

        return professionalTax;
    }
    private void stateFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_stateFieldActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_stateFieldActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (doubleroduced in Java SE 6) is not available, stay with the default look and feel.
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
            java.util.logging.Logger.getLogger(EmployeeDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(EmployeeDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(EmployeeDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(EmployeeDetails.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new EmployeeDetails().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel company;
    private javax.swing.JLabel company1;
    private javax.swing.JTextField companyField;
    private javax.swing.JFormattedTextField dateField;
    private javax.swing.JComboBox<String> dedField;
    private javax.swing.JLabel doj;
    private javax.swing.JComboBox<String> finField;
    private javax.swing.JComboBox<String> genField;
    private javax.swing.JLabel gender;
    private javax.swing.JLabel gross;
    private javax.swing.JTextField grossField1;
    private javax.swing.JButton jButton2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JTextField jTextField3;
    private javax.swing.JLabel metro;
    private javax.swing.JRadioButton metroNo;
    private javax.swing.JRadioButton metroyes;
    private javax.swing.JLabel name;
    private javax.swing.JTextField nameField;
    private javax.swing.JComboBox<String> stateField;
    private javax.swing.JTextField variableField;
    // End of variables declaration//GEN-END:variables
    static String salNotTaxable = "no";
    static String finYear;
    static double varField1=0;
    static String state;
    static String metroCity;
}
