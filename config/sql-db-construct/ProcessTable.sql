DROP TABLE [dbo].[ProcessTable]
GO
 
SET ANSI_NULLS ON
GO
 
SET QUOTED_IDENTIFIER ON
GO
 
CREATE TABLE [dbo].[ProcessTable](
       [Id] [smallint] Identity(1,1) primary key NOT NULL ,
       [PCId] [nchar](15) NOT NULL,
       [ProcessName] [nchar](50) NOT NULL)
GO