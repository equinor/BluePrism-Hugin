DROP TABLE [dbo].[ProcessItems]
GO
 
SET ANSI_NULLS ON
GO
 
SET QUOTED_IDENTIFIER ON
GO
 
CREATE TABLE [dbo].[ProcessItems](
       [Id] [int] Identity(1,1) primary key NOT NULL ,
       [PCId] [nchar](15) NOT NULL,
       [Message] [nchar](400) NOT NULL,
       [LogCode] [smallint] NOT NULL,
       [TimeStamp] [smalldatetime] NOT NULL,
       [Environment] [nchar](15) NOT NULL)
GO