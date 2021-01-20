package dPrintWriter;

/*

                                    Object
                                       | 
        ------------------------------ ----------------------------------------                              
      Writer(AC)                                                             Reader(AC)           
      |                                                                        |
      |                                                                        | 
      |                                                                        |     
      |------OutputStreamWriter                                                |----InputStreamReader     
      |         |                                                              |        |
      |         |                                                              |        |
      |         |----FileWriter(Child of OSW)                                  |        |-----FileReader(Child of ISR)
      |                                                                        | 
      |-------BufferedWriter                                                   |---BufferedReader     
      |                                                                        | 
      |                                                                        | 
      |-------PrintWriter                                                      | 
      



*/