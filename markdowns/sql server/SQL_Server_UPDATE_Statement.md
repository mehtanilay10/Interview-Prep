# SQL Server UPDATE Statement

**Summary**: in this tutorial, you will learn how to use the SQL Server `UPDATE` statement to change existing data in a table.

Insert Statements

```
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Alabama',0.04,0.05,0.07);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Alaska',0,0.01,0.07);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Arizona',0.05,0.02,0.05);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Arkansas',0.06,0.02,0.05);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('California',0.07,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Colorado',0.02,0.04,0.08);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Connecticut',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Delaware',0,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Florida',0.06,0,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Georgia',0.04,0.03,0.04);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Hawaii',0.04,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Idaho',0.06,0,0.03);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Illinois',0.06,0.02,0.04);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Indiana',0.07,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Iowa',0.06,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Kansas',0.06,0.02,0.04);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Kentucky',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Louisiana',0.05,0.04,0.07);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Maine',0.05,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Maryland',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Massachusetts',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Michigan',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Minnesota',0.06,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Mississippi',0.07,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Missouri',0.04,0.03,0.05);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Montana',0,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Nebraska',0.05,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Nevada',0.06,0.01,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('New Hampshire',0,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('New Jersey',0.06,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('New Mexico',0.05,0.02,0.03);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('New York',0.04,0.04,0.04);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('North Carolina',0.04,0.02,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('North Dakota',0.05,0.01,0.03);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Ohio',0.05,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Oklahoma',0.04,0.04,0.06);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Oregon',0,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Pennsylvania',0.06,0,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Rhode Island',0.07,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('South Carolina',0.06,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('South Dakota',0.04,0.01,0.04);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Tennessee',0.07,0.02,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Texas',0.06,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Utah',0.05,0,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Vermont',0.06,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Virginia',0.05,0,0);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Washington',0.06,0.02,0.03);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('West Virginia',0.06,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Wisconsin',0.05,0,0.01);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('Wyoming',0.04,0.01,0.02);
INSERT INTO sales.taxes(state,state_tax_rate,avg_local_tax_rate,max_local_tax_rate) VALUES('D.C.',0.05,0,0);
```

The following statement uses the `UPDATE` statement to change the values of the `updated_at` column in the `taxes` table to the system date time:

The output shows that 51 rows have been updated successfully.

The output shows that the `updated_at` column has been updated with the date and time when we ran the statement.

The following statement increases the max local tax rate by 2% and the average local tax rate by 1% in the states that have a max local tax rate of 1%.

The output shows that the taxes of 7 states have been updated.

---
Source: [SQL Server UPDATE Statement](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)